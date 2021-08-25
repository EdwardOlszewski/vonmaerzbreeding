import { useState } from 'react'
import {
  Typography,
  useTheme,
  Tabs,
  Tab,
  Box,
  makeStyles,
  AppBar,
  Container,
  Grid,
} from '@material-ui/core'
import Meta from '../../../components/Meta'
import PropTypes from 'prop-types'
import MobileImageList from '../../../components/mobileComponents/MobileImageLine'
import isabeauFrenchBulldog from '../../../data/isabeauFrenchBulldog'
import lauretteFrenchBuldog from '../../../data/lauretteFrenchBuldogData'
import lindeFrenchBulldog from '../../../data/lindeFrenchBulldogData'
import ImgLine from '../../../components/ImgLine'
import Image from 'next/image'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  }
}

function LinkTab(props) {
  return (
    <Tab
      component='a'
      onClick={(event) => {
        event.preventDefault()
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '1rem',
  },
  appBar: {
    backgroundColor: '#7f7f7f',
  },
}))

export default function RetiredRottVonMaerzHome() {
  const classes = useStyles()
  const theme = useTheme().pagesTheme
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className='mainContainer'>
      <Meta title={'Retired Von Maerz FrenchBulldogs'} />
      <Typography variant='h3' style={theme.pageHeading}>
        Retired Von Maerz French Bulldogs
      </Typography>

      <div className={classes.root}>
        <AppBar position='static' className={classes.appBar}>
          <Tabs
            variant='fullWidth'
            value={value}
            onChange={handleChange}
            aria-label='nav tabs example'
          >
            <LinkTab label='Isabeau' {...a11yProps(0)} />
            <LinkTab label='Laurette' {...a11yProps(1)} />
            <LinkTab label='Linde' {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <ImgLine title={'Isabeau'} itemData={isabeauFrenchBulldog} />
          <MobileImageList title={'Isabeau'} itemData={isabeauFrenchBulldog} />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <ImgLine title={'Laurette'} itemData={lauretteFrenchBuldog} />
          <MobileImageList title={'Laurette'} itemData={lauretteFrenchBuldog} />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <ImgLine title={'Linde'} itemData={lindeFrenchBulldog} />
          <MobileImageList title={'Linde'} itemData={lindeFrenchBulldog} />
        </TabPanel>

        <Container maxWidth='lg' style={{ padding: '2rem' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Image
                src={'/lindeFrenchBulldog/lindeAward.jpg'}
                alt={'lindeAward'}
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src={'/isabeauFrenchBulldog/groupShot.jpg'}
                alt={'groupShot'}
                width={'100%'}
                height={'60%'}
                layout='responsive'
              />
              <Typography variant='subtitle2' style={{ textAlign: 'left' }}>
                Pictured from left to right
                <br />
                - NED. & INT CH. Daphnebrit V. Marver’s Fortuna. <br />
                - Multi V. Rated Excellenz V. Moezel’s Oever. <br />
                - Multi V. Rated Isabeau V. Moezel’s Oever. <br />
                - CH. Lady Laurette V. Moezel’s
                <br />
                - Grandfather INT CH. Only One Matuchowa Frajda
                <br />
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

/*

<Divider style={theme.divider} />
      <Hidden mdDown>
        <ImgLine title={'Isabeau'} itemData={isabeauFrenchBulldog} />

        <Divider style={theme.divider} />
        <ImgLine title={'Laurette'} itemData={lauretteFrenchBuldog} />

        <Divider style={theme.divider} />
        <ImgLine title={'Linde'} itemData={lindeFrenchBulldog} />
      </Hidden>

      <Hidden lgUp>
        <MobileImageList title={'Isabeau'} itemData={isabeauFrenchBulldog} />

        <Divider style={theme.divider} />
        <MobileImageList title={'Laurette'} itemData={lauretteFrenchBuldog} />

        <Divider style={theme.divider} />
        <MobileImageList title={'Linde'} itemData={lindeFrenchBulldog} />
      </Hidden>


*/
