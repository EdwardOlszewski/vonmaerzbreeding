import React, { useEffect } from 'react'
import Navbar from './Navbar'
import NavbarTop from './NavbarTop'
import Footer from './Footer'
import { CssBaseline, Paper, Container } from '@material-ui/core'
import layoutTheme from '../themes/layoutTheme'

const Layout = ({ children }) => {
  const classes = layoutTheme()

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <NavbarTop />
      <Navbar />
      <Paper className={classes.root}>{children}</Paper>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
