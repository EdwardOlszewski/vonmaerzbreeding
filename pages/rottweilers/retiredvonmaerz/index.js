import ImageLine from '../../../components/ImageLine'

const index = () => {
  return (
    <div className='mainContainer'>
      <ImageLine />
    </div>
  )
}

export default index

/*
import Image from 'next/image'
import oprahOne from '../../../images/oprahOne.jpg'
import oprahTwo from '../../../images/oprahTwo.jpg'
import quorraOne from '../../../images/quorraOne.jpg'
import quorraTwo from '../../../images/quorraTwo.jpg'
import {
  Grid,
  Typography,
  Container,
  useTheme,
  Divider,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from '@material-ui/core'
import Meta from '../../../components/Meta'

const index = () => {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'Retired Von Maerz Rottweilers'} />
      <Typography variant='h3' style={theme.pageHeading}>
        Retired Von Maerz Rottweilers
      </Typography>

      <div style={theme.imgContainer}>
        <Grid xs={12} container spacing={2}>
          <Grid xs={12} md={3} item style={theme.imgGrid}>
            <Image src={oprahOne} />
          </Grid>
          <Grid xs={12} md={3} item style={theme.imgGrid}>
            <Image src={oprahTwo} />
          </Grid>

          <Grid xs={12} md={3} item style={theme.imgGrid}>
            <Image src={quorraOne} />
          </Grid>
          <Grid xs={12} md={3} item style={theme.imgGrid}>
            <Image src={quorraTwo} />
          </Grid>
        </Grid>

        <Divider style={theme.divider} />
        <Grid xs={12} container>
          <Grid xs={12} md={1} item />
          <Grid xs={12} md={5} item style={theme.imgGrid}>
            <Image src={quorraOne} />
          </Grid>
          <Grid xs={12} md={5} item style={theme.imgGrid}>
            <Image src={quorraTwo} />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default index


*/
