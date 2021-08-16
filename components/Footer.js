import { useState } from 'react'
import navTheme from '../themes/navTheme'
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Typography,
  Grid,
} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const classes = navTheme()
  const currentYear = new Date()

  return (
    <BottomNavigation className={classes.btmNav}>
      <Grid container justifyContent='center'>
        <Grid item xs={12}>
          <BottomNavigationAction
            className={classes.menuButton}
            icon={<FontAwesomeIcon icon={faFacebook} size='2x' />}
          />

          <BottomNavigationAction
            className={classes.menuButton}
            icon={<EmailIcon />}
          />
          <BottomNavigationAction
            className={classes.menuButton}
            icon={<PhoneIcon />}
          />
        </Grid>

        <Grid item xs={12} style={{ marginTop: '.5rem' }}>
          <Container>
            <Typography variant='caption' className={classes.copyright}>
              © {currentYear.getFullYear()} VON MAERZ. ALL RIGHTS RESERVED.
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </BottomNavigation>
  )
}

export default Footer
