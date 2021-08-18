import { createTheme } from '@material-ui/core/styles'

const layoutTheme = createTheme({
  root: {
    width: '75%',
    minHeight: '46rem',
    justifySelf: 'center',
    margin: 'auto',
    marginTop: '6rem',
    marginBottom: '3rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  },
})

export default layoutTheme
