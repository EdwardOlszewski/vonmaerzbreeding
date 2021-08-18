import { useState } from 'react'
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Typography,
  Grid,
  useTheme,
} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  // assign theme to use for styles
  const theme = useTheme().navTheme

  const currentYear = new Date()

  return (
    <BottomNavigation style={theme.btmNav}>
      <Grid container justifyContent='center'>
        <Grid item xs={12}>
          <BottomNavigationAction
            style={theme.menuButton}
            icon={<FontAwesomeIcon icon={faFacebook} size='2x' />}
          />

          <BottomNavigationAction
            style={theme.menuButton}
            icon={<EmailIcon />}
          />
          <BottomNavigationAction
            style={theme.menuButton}
            icon={<PhoneIcon />}
          />
        </Grid>

        <Grid item xs={12} style={{ marginTop: '.5rem' }}>
          <Container>
            <Typography variant='caption' style={theme.copyright}>
              © {currentYear.getFullYear()} VON MAERZ. ALL RIGHTS RESERVED.
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </BottomNavigation>
  )
}

export default Footer
