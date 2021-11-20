import Image from 'next/image'
import { AppBar, Container, makeStyles, Hidden } from '@material-ui/core'
import logo from '../public/logo1.png'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#9e887a',
    paddingTop: '1rem',
    paddingBottom: '2rem',
  },
}))

const Navbar = (props) => {
  const classes = useStyles()

  return (
    <AppBar position='static' className={classes.root}>
      <Container maxWidth='sm'>
        <Image layout='responsive' src={logo} alt={'navbarImage'} />
      </Container>
    </AppBar>
  )
}
export default Navbar
