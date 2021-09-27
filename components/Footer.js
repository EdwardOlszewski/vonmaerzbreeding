import React from 'react'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Grid,
  Container,
  Typography,
  Divider,
} from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import BusinessIcon from '@material-ui/icons/Business'
import FacebookIcon from '@material-ui/icons/Facebook'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'initial',
    marginBottom: 0,
    top: 'auto',
    backgroundColor: '#2b2b2b',
    padding: '1rem',
    textAlign: 'center',
    margin: 'auto',
  },
  footerTitle: {
    textAlign: 'center',
  },
  copyright: {
    textAlign: 'center',
    padding: '4rem',
    width: '100%',
  },
  divider: {
    backgroundColor: '#3e3e3e',
    marginBottom: '1rem',
  },
  gridItem: {
    marginTop: '1rem',
    textAlign: 'left',
  },
  link: {
    width: '100%',
    '&:hover': {
      opacity: '50%',
    },
  },
  mainGrid: {
    width: '100%',
    textAlign: 'center',
    margin: 'auto',

    [theme.breakpoints.up('xs')]: {
      marginLeft: '-2rem',
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: '10rem',
    },
  },
}))

export default function BottomAppBar() {
  const classes = useStyles()
  const currentYear = new Date()

  return (
    <AppBar className={classes.appBar}>
      <Container maxWidth='lg'>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item md={6}>
            <Grid container className={classes.gridItem}>
              <Grid item xs={2} sm={1}>
                <PhoneIcon />
              </Grid>
              <Grid item xs={10} sm={11}>
                <a href='tel:+7084252800'>
                  <Typography variant='subtitle1' className={classes.link}>
                    (708) 425-2800
                  </Typography>
                </a>
              </Grid>
              <Grid container className={classes.gridItem}>
                <Grid item xs={2} sm={1}>
                  <EmailIcon />
                </Grid>
                <Grid item xs={10} sm={11}>
                  <a href='mailto:marchmovers@gmail.com'>
                    <Typography variant='subtitle1' className={classes.link}>
                      marchmovers@gmail.com
                    </Typography>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={6}>
            <Grid container className={classes.gridItem}>
              <Grid item xs={2} sm={1}>
                <BusinessIcon />
              </Grid>
              <Grid item xs={10} sm={11}>
                <a href='http://maps.google.com/?q=Oak Lawn Illinois'>
                  <Typography variant='subtitle1' className={classes.link}>
                    Oak Lawn Illinois
                  </Typography>
                </a>
              </Grid>
              <Grid container className={classes.gridItem}>
                <Grid item xs={2} sm={1}>
                  <FacebookIcon />
                </Grid>
                <Grid item xs={10} sm={11}>
                  <a href='https://www.facebook.com/VonMaerzRott'>
                    <Typography variant='subtitle1' className={classes.link}>
                      facebook.com/VonMaerzRott
                    </Typography>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <div className={classes.copyright}>
        <Divider className={classes.divider} />
        <Typography variant='caption' style={{ marginTop: '1rem' }}>
          © {currentYear.getFullYear()} VON MAERZ ROTTWEILERS & FRENCH BULLDOGS.
          ALL RIGHTS RESERVED.
        </Typography>
      </div>
    </AppBar>
  )
}
