import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ImageList, Typography } from '@material-ui/core'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import Image from 'next/image'
import WindowSize from './WindowSize'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: '1rem',
    boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px;',
  },
  imageList: {
    width: '100%',
    height: '27rem',
    flexWrap: 'nowrap',
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
      backgroundColor: '#e5e5e5',
      outline: '1px solid slategrey',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#d1d1d1',
    },
  },
  title: {
    padding: '1rem',
  },
}))

export default function SingleLineImageList({ itemData, title }) {
  const classes = useStyles()
  const winSize = WindowSize()

  return (
    <div className={classes.root}>
      <Typography variant='h4' className={classes.title}>
        {title}
      </Typography>
      <ImageList
        className={classes.imageList}
        cols={winSize.width > 2100 ? 4 : winSize.width > 1600 ? 3 : 2}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={1} style={{ height: '25rem' }}>
            <Image src={item.img} alt={item.title} layout='fill' />
            <ImageListItemBar
              title={item.title}
              subtitle={
                <span style={{ fontSize: '1rem' }}>{item.subTitle}</span>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}
