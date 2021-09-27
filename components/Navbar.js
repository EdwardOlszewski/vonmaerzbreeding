import { useState } from 'react'
import Link from 'next/link'
import {
  AppBar,
  Toolbar,
  Hidden,
  Button,
  Container,
  useTheme,
} from '@material-ui/core'
import RottMenu from './RottMenu'
import FrenchBDMenu from './FrenchBDMenu'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import MobileNav from './mobileComponents/MobileNav'

const Navbar = () => {
  // assign theme to use for styles
  const theme = useTheme().navTheme

  const [open, setMobileMenuOpen] = useState(false)

  const [expanded, setExpanded] = useState(true)
  const [expanded2, setExpanded2] = useState(true)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className={theme.root}>
      <AppBar position='static' style={theme.Toolbar}>
        <Toolbar>
          <MobileNav />
          <Container>
            <Hidden mdDown>
              <Container maxWidth='lg' style={theme.navContainer}>
                <Link href='/'>
                  <Button
                    className='Button'
                    style={theme.menuButton}
                    variant='contained'
                    color='primary'
                    startIcon={<HomeIcon />}
                  >
                    Home
                  </Button>
                </Link>
                

                <Link
                  href='/VonMaerzPuppyQuestionnaire.pdf'
                  target='_blank'
                  download
                >
                  <Button
                    className='Button'
                    style={theme.menuButton}
                    variant='contained'
                    color='primary'
                    startIcon={<HelpOutlineIcon />}
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
