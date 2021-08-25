import { Typography, useTheme, Hidden } from '@material-ui/core'
import Meta from '../../../components/Meta'
import MobileImageList from '../../../components/mobileComponents/MobileImageLine'
import rottBroodBitches from '../../../data/rottBroodBitchesData'
import ImgLine from '../../../components/ImgLine'

export default function RottBroodBitchesHome() {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'Retired Von Maerz Rottweilers'} />
      <Typography variant='h3' style={theme.pageHeading}>
        Rottweiler Brood Bitches
      </Typography>
      <ImgLine itemData={rottBroodBitches} />
      <MobileImageList itemData={rottBroodBitches} />
    </div>
  )
}
