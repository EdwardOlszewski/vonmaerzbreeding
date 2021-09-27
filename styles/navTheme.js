import { createTheme } from '@material-ui/core/styles'

const navTheme = createTheme({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    background: 'none',
    color: 'black',
    boxShadow: 'none',
    '&:hover': {
      background: 'none',
      boxShadow: 'none',
      color: 'gray',
    },
  },

  title: {
    flexGrow: 1,
  },
  navContainerTop: {
    textAlign: 'center',
    margin: 'auto',
  },
  navContainer: {
    textAlign: 'center',
    margin: 'auto',
    marginTop: '-.8rem',
    width: '102%',
  },
  navLink: {
    textAlign: 'center',
    margin: 'auto',
  },
  navImage: {
    width: '85%',
    display: 'inline-block',
  },
  navIcon: {
    marginRight: '-2rem',
    marginLeft: '1rem',
    float: 'left',
  },
  Toolbar1: {
    backgroundColor: '#9e887a',
    padding: '5px',
  },
  Toolbar: {
    backgroundColor: '#9e887a',
    height: '3rem',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
  },
})

export default navTheme
