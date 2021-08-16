import { useState } from 'react'
import navTheme from '../themes/navTheme'
import Image from 'next/image'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Hidden,
  Button,
  Container,
  Typography,
  IconButton,
} from '@material-ui/core'
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import RottMenu from './RottMenu'
import FrenchBDMenu from './FrenchBDMenu'
import logo from '../images/logo.png'

import backgroundIMG from '../images/pawBackground.jpg'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import MuiAccordion from '@material-ui/core/Accordion'

const Navbar = () => {
  const classes = navTheme()

  const [open, setMobileMenuOpen] = useState(false)

  const [expanded, setExpanded] = useState(true)
  const [expanded2, setExpanded2] = useState(true)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.Toolbar1}>
        <Toolbar>
          <Container>
            <Typography variant='h5' className={classes.navContainerTop}>
              <Container className={classes.navImage}>
                <Image src={logo} />
              </Container>
              <Hidden mdUp>
                <IconButton
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                  onClick={(e) => setMobileMenuOpen(!open)}
                  style={{ marginTop: '-3rem' }}
                >
                  {open ? (
                    <MenuOpenRoundedIcon className={classes.hamburgerIcon} />
                  ) : (
                    <MenuRoundedIcon className={classes.hamburgerIcon} />
                  )}
                </IconButton>
              </Hidden>
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Navbar
