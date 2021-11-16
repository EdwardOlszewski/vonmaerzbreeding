import { Typography, useTheme, Grid, Paper } from '@material-ui/core'
import Meta from '../../../components/Meta'
import rottBroodBitches from '../../../data/rottBroodBitchesData'
import PictureCard from '../../../components/PictureCard'

export default function RottBroodBitchesHome() {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'Rottweiler Brood Bitches'} />
      <Typography variant='h3' style={theme.pageHeading}>
        Rottweiler Brood Bitches
      </Typography>

      <Grid container spacing={1}>
        {rottBroodBitches.map((item) => (
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
