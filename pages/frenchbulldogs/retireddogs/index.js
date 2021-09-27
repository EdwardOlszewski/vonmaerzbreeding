import { Typography, useTheme, Grid, Paper } from '@material-ui/core'
import Meta from '../../../components/Meta'
import lottyFrenchBulldog from '../../../data/lottyFrenchBulldogData'
import yipFrenchBulldog from '../../../data/yipFrenchBulldogData'
import romeoFrenchBulldog from '../../../data/romeoFrenchBulldogData'
import PictureCard from '../../../components/PictureCard'

export default function RetiredFrenchBulldogs() {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'Retired French Bulldogs'} />
      <Typography variant='h3' style={theme.pageHeading}>
        Retired French Bulldogs
      </Typography>

      <Grid container spacing={1}>
        {lottyFrenchBulldog.map((item) => (
          <Grid key={item.title} item xs={12} sm={12} md={6} lg={4}>
            <Paper key={item.title} elevation={0} style={theme.imgPaper}>
              <PictureCard key={item.title} item={item} />
            </Paper>
          </Grid>
        ))}
        {yipFrenchBulldog.map((item) => (
          <Grid key={item.title} item xs={12} sm={12} md={6} lg={4}>
            <Paper key={item.title} elevation={0} style={theme.imgPaper}>
              <PictureCard key={item.title} item={item} />
            </Paper>
          </Grid>
        ))}
        {romeoFrenchBulldog.map((item) => (
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
