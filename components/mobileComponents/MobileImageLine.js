import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ImageList, Hidden } from '@material-ui/core'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import WindowSize from '../WindowSize'
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

const MobileImageLine = ({ itemData }) => {
  const classes = useStyles()
  const winSize = WindowSize()

  return (
    <Hidden mdUp>
      <div className={classes.root}>
        <ImageList rowHeight={180} cols={8} className={classes.imageList}>
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              rows={
                winSize.width < 900 && winSize.width > 300
                  ? winSize.width / winSize.width + 0.6
                  : winSize.width < 300
                  ? 1
                  : 2
              }
              cols={
                winSize.width > 1600
                  ? 2
                  : winSize.width > 800
                  ? 4
                  : winSize.width > 650
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
    </Hidden>
  )
}

export default MobileImageLine

/*
 rows={
              winSize.width > 1600
                ? 2
                : winSize.width > 1000
                ? 2.5
                : winSize.width > 900
                ? 2
                : winSize.width > 700
                ? 1.7
                : winSize.width > 600
                ? 1
                : winSize.width > 300
                ? 2
                : winSize.width > 100
                ? 1
                : 1.5
            }


*/
