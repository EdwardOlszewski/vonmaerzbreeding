import { Typography, useTheme, Grid, Paper } from '@material-ui/core'
import Meta from '../../../components/Meta'
import retiredDogs from '../../../data/retiredDogsData'
import PictureCard from '../../../components/PictureCard'

export default function RetiredRottHome() {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'Retired Rottweilers'} />
      <Typography variant='h3' style={theme.pageHeading}>
        Retired Rottweilers
      </Typography>

      <Grid container spacing={1}>
        {retiredDogs.map((item) => (
          <Grid key={item.title} item xs={12} sm={12} md={6} lg={4}>
            <Paper key={item.title} elevation={0} style={theme.imgPaper}>
              <PictureCard key={item.title} item={item} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
