import { Typography, useTheme, Grid, Paper, Container } from '@material-ui/core'
import Image from 'next/image'
import Meta from '../../../components/Meta'
import rottStudDogs from '../../../data/rottStudDogsData'
import rottStudDogs2 from '../../../data/rottStudDogsData2'
import rottStudDogs3 from '../../../data/rottStudDogsData3'
import PictureCard from '../../../components/PictureCard'

export default function RottStudDogsHome() {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'Rottweiler Stud Dogs'} />
      <Typography variant='h3' style={theme.pageHeading}>
        Mita 
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
    </div>
  )
}
