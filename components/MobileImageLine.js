import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import itemData from '../data/itemData'
import WindowSize from './WindowSize'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: '100%',
  },
  imageList: {
    width: '100%',
    height: '52rem',
    padding: '10px',
    transform: 'translateZ(0)',
  },
  image: { width: '100%', height: '100%' },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))

const MobileImageLine = (props) => {
  const classes = useStyles()
  const winSize = WindowSize()

  return (
    <div className={classes.root}>
      <ImageList
        rowHeight={200}
        cols={6}
        gap={10}
        className={classes.imageList}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={winSize.width > 1300 ? 2 : winSize.width > 700 ? 3 : 6}
            rows={2}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={'100%'}
              height={'100%'}
              layout='responsive'
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.subTitle}</span>}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

export default MobileImageLine
