import { useState } from 'react'
import navTheme from './themes/navTheme'
import Image from 'next/image'
import Link from 'next/link'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Hidden,
  Button,
  Container,
} from '@material-ui/core'
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import RottMenu from './RottMenu'
import FrenchBDMenu from './FrenchBDMenu'
import logo from '../images/logo.png'

const Navbar = () => {
  const classes = navTheme()

  const [open, setMobileMenuOpen] = useState(false)

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.Toolbar}>
          <Container className={classes.logoImage}>
            <Image src={logo} />
          </Container>

          <Hidden mdDown>
            <Container maxWidth='lg' className={classes.navContainer}>
              <Link href='/'>
                <Button
                  className={classes.menuButton}
                  variant='contained'
                  color='primary'
                >
                  Home
                </Button>
              </Link>
              <Link href='/contact'>
                <Button
                  className={classes.menuButton}
                  variant='contained'
                  color='primary'
                >
                  Contact
                </Button>
              </Link>
              <Link href='/puppyquestonnaire'>
                <Button
                  className={classes.menuButton}
                  variant='contained'
                  color='primary'
                >
                  Puppy Questionnaire
                </Button>
              </Link>
              <RottMenu />
              <FrenchBDMenu />
            </Container>
          </Hidden>

          <Hidden lgUp>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={(e) => setMobileMenuOpen(!open)}
            >
              {open ? (
                <MenuOpenRoundedIcon className={classes.hamburgerIcon} />
              ) : (
                <MenuRoundedIcon className={classes.hamburgerIcon} />
              )}
            </IconButton>
          </Hidden>
        </Toolbar>

        <Hidden lgUp>
          <Accordion square expanded={open}>
            <AccordionSummary className={classes.mobileDisplay} />
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Hidden>
      </AppBar>
    </div>
  )
}
export default Navbar

/*

 <Grid container className={classes.navContainer} spacing={0}>
              <Grid item xs={2}>
                <Link href='/'>
                  <ListItem button className={classes.navLink}>
                    <ListItemText primary='Home' />
                  </ListItem>
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link href='/contact'>
                  <ListItem button className={classes.navLink}>
                    <ListItemText primary='Contact Us' />
                  </ListItem>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link href='/puppyquestonnaire'>
                  <ListItem button className={classes.navLink}>
                    <ListItemText primary='Puppy Questionnaire' />
                  </ListItem>
                </Link>
              </Grid>
              <Grid item xs={2}>
                <ListItem className={classes.navLink}>
                  <RottMenu />
                </ListItem>
              </Grid>
              <Grid item xs={3}>
                <ListItem>
                  <FrenchBDMenu className={classes.navLink} />
                </ListItem>
              </Grid>
            </Grid>



*/
