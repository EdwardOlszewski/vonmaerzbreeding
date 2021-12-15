import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider, useTheme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'
import NavbarTop from '../components/NavbarTop'
import MobileNav from '../components/mobileComponents/MobileNav'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'

export default function MyApp(props) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name='google-site-verification'
          content='MsgzQwwFhbHrdtZbtvszPSwOmQLG5LU1g4szwZuJi0Y'
        />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <meta
          name='keywords'
          content='rottweilers, puppies, french bulldogs, rottweiler puppies, von maerz, dogs for sale, puppies for sale, breeders, breeding'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavbarTop />
        <Navbar />
        <div className='mainPaper'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
