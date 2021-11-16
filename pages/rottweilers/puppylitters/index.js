import { Typography, useTheme, Grid, Paper } from '@material-ui/core'
import Meta from '../../../components/Meta'
import puppyLitters from '../../../data/rottLitters'
import puppyLitters2 from '../../../data/rottLitters2'
import PictureCard from '../../../components/PictureCard'

export default function PuppyLitter() {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'Retired Rottweilers'} />
      <Typography variant='h3' style={theme.pageHeading}>
        W Litter
      </Typography>

      <Grid container spacing={1}>
        {puppyLitters.map((item) => (
          <Grid key={item.title} item xs={12} sm={12} md={6} lg={6}>
            <Paper key={item.title} elevation={0} style={theme.imgPaper}>
              <PictureCard key={item.title} item={item} />
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant='h3' style={theme.pageHeading}>
        U Litter
      </Typography>

      <Grid container spacing={1}>
        {puppyLitters.map((item) => (
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
