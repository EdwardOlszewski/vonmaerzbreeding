import { makeStyles } from '@material-ui/core'

const navTheme = makeStyles((theme) => ({
  //Home Screen
  contactButton: {
    backgroundColor: '#439775',
    marginLeft: '10px',
    marginTop: '2rem',
    '&:hover': {
      background: '#56c397',
    },
  },

  pageHeading: {
    textAlign: 'center',
    margin: 'auto',
    padding: '1rem',
    marginTop: '-4rem',
  },
  logoHeading: {
    textAlign: 'center',
    margin: 'auto',
    padding: '1rem',
    marginTop: '-4rem',
  },
  imgContainer: {
    margin: 'auto',
    textAlign: 'center',
    padding: '1rem',
  },
  aboutImg: {
    marginRight: '1rem',
  },
  indexContainer: { textAlign: 'center', marginTop: '2rem' },

  indexText: {
    padding: '10px',
  },
}))

export default navTheme
