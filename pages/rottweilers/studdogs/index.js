import { Typography, useTheme, Grid, Paper } from '@material-ui/core'
import Meta from '../../../components/Meta'
import rottStudDogs from '../../../data/rottStudDogsData'
import PictureCard from '../../../components/PictureCard'

export default function RottStudDogsHome() {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'Rottweiler Stud Dogs'} />
      <Typography variant='h3' style={theme.pageHeading}>
        Rottweiler Stud Dogs
      </Typography>

      <Grid container spacing={1}>
        {rottStudDogs.map((item) => (
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Paper elevation={0} style={theme.imgPaper}>
              <PictureCard item={item} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
