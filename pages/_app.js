import React from 'react'
import '../styles/globals.css'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

export default function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
