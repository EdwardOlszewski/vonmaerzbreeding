import { Typography, useTheme, Grid, Paper } from '@material-ui/core'
import Meta from '../../../components/Meta'
import isabeauFrenchBulldog from '../../../data/isabeauFrenchBulldog'
import lauretteFrenchBuldog from '../../../data/lauretteFrenchBuldogData'
import lindeFrenchBulldog from '../../../data/lindeFrenchBulldogData'
import PictureCard from '../../../components/PictureCard'

export default function RetiredVonMaerzFrenchBulldogs() {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'Retired Von Maerz French Bulldogs'} />
      <Typography variant='h3' style={theme.pageHeading}>
        Retired Von Maerz French Bulldogs
      </Typography>

      <Grid container spacing={1}>
        {isabeauFrenchBulldog.map((item) => (
          <Grid key={item.title} item xs={12} sm={12} md={6} lg={4}>
            <Paper key={item.title} elevation={0} style={theme.imgPaper}>
              <PictureCard key={item.title} item={item} />
            </Paper>
          </Grid>
        ))}
        {lauretteFrenchBuldog.map((item) => (
          <Grid key={item.title} item xs={12} sm={12} md={6} lg={4}>
            <Paper key={item.title} elevation={0} style={theme.imgPaper}>
              <PictureCard key={item.title} item={item} />
            </Paper>
          </Grid>
        ))}
        {lindeFrenchBulldog.map((item) => (
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
