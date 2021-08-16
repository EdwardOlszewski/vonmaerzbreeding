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
