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
    marginTop: '-1.5rem',
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
  Toolbar1: {
    backgroundColor: '#BFAFA6',
    padding: '5px',
  },
  Toolbar: {
    backgroundColor: '#AA968A',
    height: '2.5rem',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;',
  },
  hamburgerIcon: {
    color: 'black',
    fontSize: '2rem',
  },
  //Accordion Style
  mobileDisplay: {
    display: 'none',
  },
  mobileMenu: {
    borderRadius: '0',
  },

  //Drop Down Options
  dropDownOption: {
    padding: 0,
  },
  dropDownOption2: { marginLeft: '10px' },

  //Footer
  btmNav: {
    backgroundColor: '#f4f5f6',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;',
    marginTop: '1rem',
    height: '100%',
    margin: 'auto',
    textAlign: 'center',
  },
  copyright: {
    color: 'gray',
  },
})

export default navTheme
