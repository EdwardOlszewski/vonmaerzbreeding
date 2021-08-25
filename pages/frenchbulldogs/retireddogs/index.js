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
import lottyFrenchBulldog from '../../../data/lottyFrenchBulldogData'
import yipFrenchBulldog from '../../../data/yipFrenchBulldogData'
import romeoFrenchBulldog from '../../../data/romeoFrenchBulldogData'
import ImgLine from '../../../components/ImgLine'
import Image from 'next/image'

function TabPanel(props) {
  //props
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
      <Meta title={'Retired French Bulldogs'} />
      <Typography variant='h3' style={theme.pageHeading}>
        Retired French Bulldogs
      </Typography>

      <div className={classes.root}>
        <AppBar position='static' className={classes.appBar}>
          <Tabs
            variant='fullWidth'
            value={value}
            onChange={handleChange}
            aria-label='nav tabs example'
          >
            <LinkTab label='Lotty' {...a11yProps(0)} />
            <LinkTab label='Yip' {...a11yProps(1)} />
            <LinkTab label='Romeo' {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <ImgLine itemData={lottyFrenchBulldog} />
          <MobileImageList itemData={lottyFrenchBulldog} />
          <Container maxWidth='lg' style={{ padding: '2rem' }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Image
                  src='/retiredFrenchBulldogs/lottyAward.jpg'
                  alt={'lottyAward'}
                  width={'100%'}
                  height={'80%'}
                  layout='responsive'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Image
                  src={'/retiredFrenchBulldogs/lottyAwardTwo.jpg'}
                  alt={'lottyAwardTwo'}
                  width={'100%'}
                  height={'80%'}
                  layout='responsive'
                />
              </Grid>
            </Grid>
          </Container>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <ImgLine itemData={yipFrenchBulldog} />
          <MobileImageList itemData={yipFrenchBulldog} />
          <Container maxWidth='lg' style={{ padding: '2rem' }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Image
                  src={'/retiredFrenchBulldogs/yipAward.jpg'}
                  alt={'yipAward'}
                  width={'100%'}
                  height={'100%'}
                  layout='responsive'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Image
                  src={'/retiredFrenchBulldogs/yipAwardTwo.jpg'}
                  alt={'yipAwardTwo'}
                  width={'100%'}
                  height={'100%'}
                  layout='responsive'
                />
              </Grid>
            </Grid>
          </Container>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <ImgLine itemData={romeoFrenchBulldog} />
          <MobileImageList itemData={romeoFrenchBulldog} />
          <Container maxWidth='sm' style={{ padding: '2rem' }}>
            <Image
              src={'/retiredFrenchBulldogs/romeoAward.jpg'}
              alt={'romeoAward'}
              width={'100%'}
              height={'100%'}
              layout='responsive'
            />
          </Container>
        </TabPanel>
      </div>
    </div>
  )
}
