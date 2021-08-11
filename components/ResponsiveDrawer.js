import React, { useState } from 'react'
import RotterilersMenu from './RottweilersMenu'
import FrenchMenu from './FrenchMenu'
import MainMenu from './MainMenu'
import navTheme from './themes/navTheme'
import navStyle from '../styles/Nav.module.css'
import {
  useTheme,
  AppBar,
  Divider,
  Hidden,
  IconButton,
  Toolbar,
  Drawer,
  Container,
} from '@material-ui/core'
import Image from 'next/image'
import logoIMG from '../images/logo.png'
import logoIMG2 from '../images/longLogo.png'
import MenuIcon from '@material-ui/icons/Menu'
import FacebookIcon from '@material-ui/icons/Facebook'
import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'

const ResponsiveDrawer = ({ children }, props) => {
  const currentYear = new Date().getFullYear()
  const { window } = props
  const classes = navTheme()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const container =
    window !== undefined ? () => window().document.body : undefined

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div className={classes.drawerDiv}>
      <div className={classes.toolbar} />
      <Divider className={classes.divider} />
      <MainMenu />
      <Divider className={classes.divider} />
      <RotterilersMenu />
      <FrenchMenu />

      <Divider className={classes.divider} />
      <footer className={navStyle.drawerFooter}>
        <Divider className={classes.divider} />
        <IconButton>
          <FacebookIcon className={classes.socialIcons} fontSize='medium' />
        </IconButton>
        <IconButton>
          <CallIcon className={classes.socialIcons} fontSize='medium' />
        </IconButton>
        <IconButton>
          <EmailIcon className={classes.socialIcons} fontSize='medium' />
        </IconButton>
      </footer>

      <Divider />
    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Hidden lgUp>
            <Image src={logoIMG} />
          </Hidden>
          <Hidden mdDown>
            <Image src={logoIMG2} />
          </Hidden>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        <Hidden smDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        {children}
        <footer className={navStyle.footer}>
          &copy;{currentYear} Von Maerz Rottweilers & French Bulldogs
        </footer>
      </main>
    </div>
  )
}

export default ResponsiveDrawer
