import React, { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {
  SwipeableDrawer,
  useTheme,
  Typography,
  Hidden,
  IconButton,
} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import MobileRottMenu from '../mobileComponents/MobileRottMenu'
import MobileFrenchBDMenu from '../mobileComponents/MobileFrenchBDMenu'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  mobileLink: {
    paddingLeft: '2rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgb(0,0,0,.05)',
    },
  },
  hamburgerIcon: {
    marginTop: '-1rem',
    color: 'black',
  },
})

export default function SwipeableTemporaryDrawer() {
  // assign theme to use for styles
  const theme = useTheme().navTheme
  const classes = useStyles()
  const [state, setState] = useState(false)

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
    >
      <List>
        <ListItem className={classes.mobileLink}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <Link href='/'>
            <Typography>Home</Typography>
          </Link>
        </ListItem>

        <Divider />
        <ListItem className={classes.mobileLink}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <Link href='/about'>
            <Typography>About Us</Typography>
          </Link>
        </ListItem>

        <Divider />
        <ListItem className={classes.mobileLink}>
          <ListItemIcon>
            <HelpOutlineIcon />
          </ListItemIcon>
          <Link href='/VonMaerzPuppyQuestionnaire.pdf' target='_blank' download>
            <Typography>Puppy Questionnaire</Typography>
          </Link>
        </ListItem>

        <Divider />
        <ListItem>
          <MobileRottMenu />
        </ListItem>

        <Divider />
        <ListItem>
          <MobileFrenchBDMenu />
        </ListItem>
        <Divider />
      </List>
    </div>
  )

  return (
    <Hidden lgUp>
      <React.Fragment key={'left'}>
        <IconButton
          onClick={toggleDrawer('left', true)}
          className={classes.hamburgerIcon}
        >
          <MenuIcon fontSize='large' />
        </IconButton>

        <SwipeableDrawer
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>
    </Hidden>
  )
}

/*
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <MobileRottMenu />
        </ListItem>
      </List>
      <Divider />
    </div>


*/
