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
  navIconTwo: {},
  Toolbar1: {
    backgroundColor: '#BFAFA6',
    padding: '5px',
  },
  Toolbar: {
    backgroundColor: '#AA968A',
    height: '3rem',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
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
    backgroundColor: '#ffff',
    width: '100%',
    height: '5rem',
    margin: 'auto',
    textAlign: 'center',
    padding: '1rem',
    width: '90%',
  },

  copyright: {
    color: '#fffff',
  },
})

export default navTheme
