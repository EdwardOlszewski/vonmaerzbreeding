import { useState } from 'react'
import Image from 'next/image'
import {
  AppBar,
  Toolbar,
  Hidden,
  Container,
  Typography,
  IconButton,
  useTheme,
} from '@material-ui/core'
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import logo from '../public/logo.png'

const Navbar = (props) => {
  // assign theme to use for styles
  const theme = useTheme().navTheme

  // assign variables
  const [open, setMobileMenuOpen] = useState(false)

  // return
  return (
    <div className='root'>
      <AppBar position='static' style={theme.Toolbar1}>
        <Toolbar>
          <Container>
            <Typography variant='h5' style={theme.navContainerTop}>
              <Container className='navImage'>
                <Image src={logo} alt={'navbarImage'} />
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
                    <MenuOpenRoundedIcon style={theme.hamburgerIcon} />
                  ) : (
                    <MenuRoundedIcon style={theme.hamburgerIcon} />
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
