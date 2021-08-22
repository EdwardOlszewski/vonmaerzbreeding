import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import itemData from '../data/itemData'
import { Container, Paper, Button, Grid } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    margin: 'auto',

    button: {
      transition: '0ms',
    },
  },
}))

const ImageLine = (props) => {
  const [displayNum, setDisplayNum] = useState(2)
  const classes = useStyles()

  function Item(props) {
    return (
      <div style={{ display: 'inline-block' }}>
        {props.num == displayNum - 1 ? <img src={props.item.img} /> : null}

        {props.num == displayNum ? <img src={props.item.img} /> : null}

        {props.num == displayNum + 1 ? <img src={props.item.img} /> : null}
      </div>
    )
  }

  return (
    <Container>
      {itemData.map((item, i) => (
        <Item key={i} num={i} item={item} />
      ))}
    </Container>
  )
}

export default ImageLine
