import { Typography, useTheme, Grid, Paper } from '@material-ui/core'
import Meta from '../../../components/Meta'
import retiredVonMaerzData from '../../../data/retiredVonMaerzData'
import PictureCard from '../../../components/PictureCard'

export default function RetiredRottVonMaerzHome() {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'Retired Von Maerz'} />
      <Typography variant='h3' style={theme.pageHeading}>
        Retired Von Maerz
      </Typography>

      <Grid container spacing={1}>
        {retiredVonMaerzData.map((item) => (
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
