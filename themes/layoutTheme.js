import { makeStyles } from '@material-ui/core'

const layoutTheme = makeStyles((theme) => ({
  root: {
    width: '75%',
    minHeight: '46rem',
    justifySelf: 'center',
    margin: 'auto',
    marginTop: '5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',

    [theme.breakpoints.down('md')]: {
      width: '95%',
    },
  },
}))

export default layoutTheme
