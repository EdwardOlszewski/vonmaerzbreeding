import { useState } from 'react'
import Image from 'next/image'
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  useTheme,
} from '@material-ui/core'
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
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Navbar
