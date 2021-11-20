import { useState } from 'react'
import Link from 'next/link'
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
import rottStudDogs from '../../../data/rottStudDogsData'
import rottStudDogs2 from '../../../data/rottStudDogsData2'
import rottStudDogs3 from '../../../data/rottStudDogsData3'
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

export default function RottStudDogsHome() {
  const theme = useTheme().pagesTheme

  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  return (
    <div className='mainContainer'>
      <Meta title={'Rottweiler Stud Dogs'} />

      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { backgroundColor: 'blue' } }}
        variant='scrollable'
        className={classes.tabs}
      >
        <Tab className={classes.tab} label='Mita' />
        <Tab className={classes.tab} label='Luca' />
        <Tab className={classes.tab} label='Joker' />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          {rottStudDogs.map((item) => (
            <Grid key={item.title} item xs={12} sm={12} md={6} lg={4}>
              <Paper key={item.title} elevation={0} style={theme.imgPaper}>
                <PictureCard key={item.title} item={item} />
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Link href='/Luca.jpg' target='_blank' download>
          <Button className={classes.pedBttn}>
            <Typography variant='h5'>View My Pedigree</Typography>
          </Button>
        </Link>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container spacing={2}>
          {rottStudDogs2.map((item) => (
            <Grid key={item.title} item xs={12} sm={12} md={6} lg={4}>
              <Paper key={item.title} elevation={0} style={theme.imgPaper}>
                <PictureCard key={item.title} item={item} />
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Link href='/Luca.jpg' target='_blank' download>
          <Button className={classes.pedBttn}>
            <Typography variant='h5'>View My Pedigree</Typography>
          </Button>
        </Link>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Grid container spacing={2}>
          {rottStudDogs3.map((item) => (
            <Grid key={item.title} item xs={12} sm={12} md={6} lg={4}>
              <Paper key={item.title} elevation={0} style={theme.imgPaper}>
                <PictureCard key={item.title} item={item} />
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Link href='/Joker.jpg' target='_blank' download>
          <Button className={classes.pedBttn}>
            <Typography variant='h5'>View My Pedigree</Typography>
          </Button>
        </Link>
      </TabPanel>
    </div>
  )
}

/*


 <Container style={{width:'50%', height: '50%'}}>
    <Image
          src={'/rottStudDogs/Mita4.jpg'}
          alt='rottIcon'
          layout='responsive'
          width='100%'
          height='50%'
        />
    </Container>
     

      <Grid container spacing={1}>
     

        {rottStudDogs.map((item) => (
          <Grid key={item.title} item xs={12} sm={12} md={6} lg={6}>
            <Paper key={item.title} elevation={0} style={theme.imgPaper}>
              <PictureCard key={item.title} item={item} />
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant='h3' style={theme.pageHeading}>
        Luca
      </Typography>

    <Container style={{width:'50%', height: '50%'}}>
    <Image
          src={'/rottStudDogs/Mita4.jpg'}
          alt='rottIcon'
          layout='responsive'
          width='100%'
          height='50%'
        />
    </Container>
     

      <Grid container spacing={1}>
     

        {rottStudDogs2.map((item) => (
          <Grid key={item.title} item xs={12} sm={12} md={6} lg={6}>
            <Paper key={item.title} elevation={0} style={theme.imgPaper}>
              <PictureCard key={item.title} item={item} />
            </Paper>
          </Grid>
        ))}
      </Grid>



      <Typography variant='h3' style={theme.pageHeading}>
        Joker
      </Typography>

    <Container style={{width:'50%', height: '50%'}}>
    <Image
          src={'/rottStudDogs/Mita4.jpg'}
          alt='rottIcon'
          layout='responsive'
          width='100%'
          height='50%'
        />
    </Container>
     

      <Grid container spacing={1}>
     

        {rottStudDogs3.map((item) => (
          <Grid key={item.title} item xs={12} sm={12} md={6} lg={6}>
            <Paper key={item.title} elevation={0} style={theme.imgPaper}>
              <PictureCard key={item.title} item={item} />
            </Paper>
          </Grid>
        ))}
      </Grid>






*/
