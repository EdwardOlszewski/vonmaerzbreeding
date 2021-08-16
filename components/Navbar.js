import { useState } from 'react'
import navTheme from '../themes/navTheme'
import Image from 'next/image'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Button,
  Container,
} from '@material-ui/core'
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import RottMenu from './RottMenu'
import FrenchBDMenu from './FrenchBDMenu'
import logo from '../images/sss.png'

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
      <AppBar position='static' className={classes.Toolbar}>
        <Toolbar>
          <Container>
            <Hidden smDown>
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
                <Link href='/about'>
                  <Button
                    className={classes.menuButton}
                    variant='contained'
                    color='primary'
                  >
                    about us
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
          </Container>
        </Toolbar>

        <Hidden lgUp>
          <RottMenu />
        </Hidden>
      </AppBar>
    </div>
  )
}
export default Navbar

/*

 <Accordion
                  square
                  expanded={expanded2}
                  onClick={() => setExpanded2(!expanded2)}
                >
                  <AccordionSummary
                    aria-controls='panel2d-content'
                    id='panel2d-header'
                  >
                    <Typography>Brood Bitches</Typography>
                  </AccordionSummary>
                  <AccordionDetails>Hu</AccordionDetails>
                </Accordion>

*/
