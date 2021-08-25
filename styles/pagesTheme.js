import { createTheme } from '@material-ui/core/styles'

const pagesTheme = createTheme({
  //Home Screen
  contactButton: {
    backgroundColor: '#439775',
    marginLeft: '10px',
    marginTop: '2rem',
    '&:hover': {
      background: '#56c397',
    },
  },
  contactButtonHover: {
    background: '#56c397',
  },

  pageHeading: {
    textAlign: 'center',
    margin: 'auto',
    padding: '2rem',
    marginBottom: '1rem',
    fontSize: '3rem',
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
    width: '100%',
  },
  aboutImg: {
    marginRight: '1rem',
  },
  indexContainer: {
    textAlign: 'center',
    marginTop: '2rem',
  },

  indexText: {
    padding: '10px',
  },

  imgGrid: {
    margin: '5px',
    textAlign: 'center',
    margin: 'auto',
  },

  divider: {
    marginTop: '3rem',
    marginBottom: '3rem',
    opacity: '50%',
  },
})

export default pagesTheme
