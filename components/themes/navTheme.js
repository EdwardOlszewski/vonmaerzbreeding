import { makeStyles } from '@material-ui/core'

const navTheme = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    background: 'none',
    color: 'black',
    boxShadow: 'none',
    '&:hover': {
      background: '#E4DFDA',
      boxShadow: 'none',
    },
  },

  title: {
    flexGrow: 1,
  },
  navContainer: {
    width: '50rem',
    textAlign: 'right',
    margin: 'auto',
    marginRight: 0,
  },
  navLink: {
    textAlign: 'center',
    margin: 'auto',
  },
  logoImage: {
    marginLeft: 0,
    margin: 'auto',
    textAlign: 'left',
    width: '30rem',
  },
  Toolbar: {
    backgroundColor: '#E4DFDA',
  },
  hamburgerIcon: {
    color: 'black',
    fontSize: '3rem',
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
}))

export default navTheme

/*
const navTheme = makeStyles((theme) => ({
  textColor: {
    color: '#d9d9d9',
  },
  root: {
    display: 'flex',
    minHeight: '55rem',
  },
  drawer: {
    backgroundColor: bgColor,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    alignItems: 'center',
    backgroundColor: '#E4DFDA',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    backgroundColor: bgColor,
    width: drawerWidth,
    overflow: 'auto',
    height: '100%',
  },
  content: {
    marginTop: '5rem',
    minHeight: '100%',
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerDiv: {
    backgroundColor: bgColor,
  },

  divider: {
    backgroundColor: '#404040',
  },
  socialIcons: {
    color: '#eaeaea',
  },
  socialNav: {
    backgroundColor: bgColor,
  },

  nested: {
    paddingLeft: theme.spacing(6),
    '&:hover': {
      background: '#2e3739',
    },
  },
  nested2nd: {
    paddingLeft: theme.spacing(4),
    '&:hover': {
      background: '#2e3739',
    },
  },

  listItemHover: {
    '&:hover': {
      background: '#2e3739',
    },
  },
}))
*/
