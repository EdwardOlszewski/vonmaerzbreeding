import {
  Grid,
  Typography,
  Button,
  useTheme,
  makeStyles,
  Container,
  BottomNavigationAction,
  BottomNavigation,
} from '@material-ui/core'
import Meta from '../components/Meta'
import Image from 'next/image'
import facebookIcon from '../public/icons/facebookIcon.png'
import phoneIcon from '../public/icons/phoneIcon.png'
import emailIcon from '../public/icons/emailIcon.png'
import logoTwo from '../public/logoTwo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem',
    marginTop: '9rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2rem',
    },
  },

  iconImgContainer: {
    width: '100px',

    [theme.breakpoints.down('xs')]: {
      width: '80px',
    },
  },
  iconContainer: {
    width: '80%',
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '5rem',
    },
  },
  iconText: {
    margin: 'auto',
    textAlign: 'center',
  },
  secondHeading: {
    marginTop: '1rem',
    margin: 'auto',
    textAlign: 'center',
    padding: '1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
  },
  pageHeading: {
    margin: 'auto',
    textAlign: 'center',
    paddingTop: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
  },
  iconIMG: {
    '&:hover': {
      opacity: '70%',
    },
  },
}))

export default function Home() {
  const theme = useTheme().pagesTheme
  const classes = useStyles()

  return (
    <>
      <Meta title={'Home'} />
      <Typography variant='h3' className={classes.pageHeading}>
        Von Maerz Rottweilers & French Bulldogs
      </Typography>

      <Typography variant='h4' className={classes.secondHeading}>
        Rottweiler Puppies Avaliable Now!
      </Typography>

      <Container maxWidth='lg' className={classes.root}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Container className={classes.iconContainer}>
              <Container className={classes.iconImgContainer}>
                <a href='https://www.facebook.com/VonMaerzRott'>
                  <Image
                    src={facebookIcon}
                    alt={'phoneIcon'}
                    layout='responsive'
                    className={classes.iconIMG}
                  />
                </a>
              </Container>

              <Container className={classes.iconText}>
                <Typography variant='subtitle2'>
                  facebook.com/VonMaerzRott
                </Typography>
              </Container>
            </Container>
          </Grid>

          <Grid item xs={12} md={4}>
            <Container className={classes.iconContainer}>
              <Container className={classes.iconImgContainer}>
                <a href='tel:+7082331776'>
                  <Image
                    src={phoneIcon}
                    alt={'phoneIcon'}
                    layout='responsive'
                    className={classes.iconIMG}
                  />
                </a>
              </Container>

              <Container className={classes.iconText}>
                <Typography variant='subtitle2'>(708) 233-1776</Typography>
              </Container>
            </Container>
          </Grid>

          <Grid item xs={12} md={4}>
            <Container className={classes.iconContainer}>
              <Container className={classes.iconImgContainer}>
                <a href='mailto:Chuck@vonmaerzrottweilers.com'>
                  <Image
                    src={emailIcon}
                    alt={'emailIcon'}
                    layout='responsive'
                    className={classes.iconIMG}
                  />
                </a>
              </Container>
              <Container className={classes.iconText}>
                <Typography variant='subtitle2'>
                  Chuck@vonmaerzrottweilers.com
                </Typography>
              </Container>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
