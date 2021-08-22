import { Typography, useTheme } from '@material-ui/core'
import Meta from '../../../components/Meta'
import MobileImageList from '../../../components/MobileImageLine'

export default function RottBroodBitchesHome() {
  const theme = useTheme().pagesTheme
  return (
    <div className='mainContainer'>
      <Meta title={'Retired Von Maerz Rottweilers'} />
      <Typography variant='h3' style={theme.pageHeading}>
        Brood Bitches
      </Typography>

      <MobileImageList />
    </div>
  )
}
