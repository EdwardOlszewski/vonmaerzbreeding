import { useState } from 'react'
import {
  Typography,
  useTheme,
  Grid,
  Paper,
  Tab,
  Tabs,
  makeStyles,
  Button,
} from '@material-ui/core'
import Box from '@mui/material/Box'
import Meta from '../../../components/Meta'
import puppyLitters from '../../../data/rottLitters'
import puppyLitters2 from '../../../data/rottLitters2'
import PictureCard from '../../../components/PictureCard'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgb(0,0,0,0)',
    minHeight: '200vh',
    width: '100%',
    padding: '0',
  },
  titleContainer: {
    textAlign: 'center',
    paddingTop: '10rem',
    paddingBottom: '10rem',
    background: 'rgb(0,0,0,0)',
  },
  tab: {
    fontSize: '2rem',
    marginLeft: '1rem',
  },
  tabs: {
    backgroundColor: '#355936',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
    width: '99%',
    textAlign: 'center',
    margin: 'auto',
    color: 'white',
  },
  pedBttn: {
    width: '100%',
    backgroundColor: '#355936',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
    marginTop: '1rem',
    padding: '1rem',
    color: 'white',
    borderRadius: 0,
  },
}))

function TabPanel(props) {
  const { children, value, index } = props
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export default function PuppyLitter() {
  const theme = useTheme().pagesTheme

  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  return (
    <div className='mainContainer'>
      <Meta title={'Retired Rottweilers'} />
      <Typography variant='h3' style={theme.pageHeading}>
        W Litter
      </Typography>

      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { backgroundColor: 'blue' } }}
        variant='scrollable'
        className={classes.tabs}
      >
        <Tab className={classes.tab} label='U-Litter' />
        <Tab className={classes.tab} label='W-Litter' />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          {puppyLitters2.map((item) => (
            <Grid key={item.title} item xs={12} sm={12} md={6} lg={4}>
              <Paper key={item.title} elevation={0} style={theme.imgPaper}>
                <PictureCard key={item.title} item={item} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container spacing={2}>
          {puppyLitters.map((item) => (
            <Grid key={item.title} item xs={12} sm={12} md={6} lg={4}>
              <Paper key={item.title} elevation={0} style={theme.imgPaper}>
                <PictureCard key={item.title} item={item} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </div>
  )
}
