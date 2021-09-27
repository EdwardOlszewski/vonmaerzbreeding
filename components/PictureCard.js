import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: 'auto',
    textAlign: 'center',
    borderRadius: 0,
    padding: '5px',
    backgroundColor: '#fcfcfc',
  },
  text: {
    fontWeight: 'bold',
  },
}))

export default function MediaCard({ item }) {
  const classes = useStyles()

  return (
    <Card className={classes.root} elevation={0}>
      <CardMedia component='img' image={item.img} alt={item.title} />
      <CardContent>
        <Typography variant='subtitle1' className={classes.text}>
          {item.title}
        </Typography>
        <Typography variant='subtitle1' className={classes.text}>
          {item.subTitle}
        </Typography>
      </CardContent>
    </Card>
  )
}
