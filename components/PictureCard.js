import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Fade from '@mui/material/Fade'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: 'auto',
    textAlign: 'center',
    borderRadius: 0,
    padding: '5px',
    height: '100%',
    backgroundColor: 'rgb(0,0,0,0)',
    padding: '1rem',
  },
  text: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '2.2vmax',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5vmax',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3vmax',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1vmax',
    },
  },
}))

export default function MediaCard({ item }) {
  const classes = useStyles()

  return (
    <Fade timeout={1000} in={true}>
      <Card className={classes.root} elevation={0}>
        <CardMedia
          className={classes.img}
          component='img'
          image={item.img}
          alt={item.title}
        />
        <CardContent>
          <Typography variant='h4' className={classes.text}>
            {item.title}
          </Typography>
          <Typography variant='h4' className={classes.text}>
            {item.subTitle}
          </Typography>
        </CardContent>
      </Card>
    </Fade>
  )
}
