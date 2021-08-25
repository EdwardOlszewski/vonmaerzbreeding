import { Typography, useTheme } from '@material-ui/core'
import Meta from '../../../components/Meta'

export default function RottStudDogsHome() {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'FrenchBulldog Stud Dogs'} />
      <Typography variant='h3' style={theme.pageHeading}>
        FrenchBulldog Stud Dogs
      </Typography>
    </div>
  )
}
