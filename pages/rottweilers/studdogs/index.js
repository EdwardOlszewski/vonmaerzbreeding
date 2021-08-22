import Image from 'next/image'
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
        Rottweilers Stud Dogs
      </Typography>

      <Typography variant='h5' style={theme.pageHeading}>
        Currently None to display
      </Typography>

      <Container style={theme.imgContainer}></Container>
    </div>
  )
}

export default index
