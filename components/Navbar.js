import Link from 'next/link'
import {
  AppBar,
  Toolbar,
  Hidden,
  Button,
  Container,
  makeStyles,
} from '@material-ui/core'
import DropDownMenu from './DropDownMenu'
import HomeIcon from '@material-ui/icons/Home'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import MobileNav from './mobileComponents/MobileNav'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#3E3E3E',
  },
  linkContainer: {
    textAlign: 'center',

    width: '100%',
  },
  button: {
    background: 'none',
    color: 'white',
    boxShadow: 'none',
    '&:hover': {
      background: 'none',
      boxShadow: 'none',
      color: 'gray',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1vmax',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '.8vmax',
    },
  },
}))

const Navbar = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar position='static' className={classes.root}>
        <Toolbar>
          <MobileNav />
          <Hidden mdDown>
            <div maxWidth='false' className={classes.linkContainer}>
              <Link href='/'>
                <Button
                  className={classes.button}
                  variant='contained'
                  startIcon={<HomeIcon />}
                  size='lg'
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
                  className={classes.button}
                  variant='contained'
                  startIcon={<HelpOutlineIcon />}
                  size='lg'
                >
                  Puppy Questionnaire
                </Button>
              </Link>

              <DropDownMenu dogType={'rottweilers'} pictureName={'rott.png'} />
              <DropDownMenu
                dogType={'frenchbulldogs'}
                pictureName={'bulldog.png'}
              />
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>

      <div className='pawBackground' />
    </>
  )
}
export default Navbar
