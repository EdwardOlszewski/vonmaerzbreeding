import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ImageList, Typography } from '@material-ui/core'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import WindowSize from './WindowSize'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: '100%',
    boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',
    padding: '1rem',
  },
  imageList: {
    width: '100%',
    height: '52rem',
    transform: 'translateZ(0)',
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      backgroundColor: 'rgba(0,0,0,.03)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#d7cfc6',
      outline: '1px solid slategrey',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#bfb7af',
    },
  },
  image: { width: '100%', height: '50px' },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))

const MobileImageLine = ({ title, itemData }) => {
  const classes = useStyles()
  const winSize = WindowSize()

  return (
    <div className={classes.root}>
      <Typography variant='h4'>{title}</Typography>
      <ImageList rowHeight={180} cols={8} className={classes.imageList}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            rows={
              winSize.width > 1600
                ? 2
                : winSize.width > 1000
                ? 2.5
                : winSize.width > 700
                ? 2
                : winSize.width > 300
                ? 1.5
                : winSize.width > 100
                ? 1
                : 1.5
            }
            cols={
              winSize.width > 1600
                ? 2
                : winSize.width > 800
                ? 4
                : winSize.width > 500
                ? 4
                : 8
            }
          >
            <Image src={item.img} alt={item.title} layout='fill' />
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

/*
<div className={classes.root}>
      <ImageList rowHeight={200} cols={8} className={classes.imageList}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={winSize.width > 1600 ? 2 : winSize.width > 700 ? 4 : 8}
            rows={2}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={'100px'}
              height={'100px'}
              layout='responsive'
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.subTitle}</span>}
              style={{ backgroundColor: 'gray' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>









*/
