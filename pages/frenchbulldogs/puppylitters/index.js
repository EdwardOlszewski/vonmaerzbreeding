import { Typography, useTheme } from '@material-ui/core'
import Meta from '../../../components/Meta'

export default function RottPuppyHome() {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'FrenchBulldog Litters'} />
      <Typography variant='h3' style={theme.pageHeading}>
        FrenchBulldog Litters
      </Typography>
    </div>
  )
}
