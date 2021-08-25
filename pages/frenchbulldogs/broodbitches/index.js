import { Typography, useTheme } from '@material-ui/core'
import Meta from '../../../components/Meta'
import MobileImageList from '../../../components/MobileImageLine'

export default function RottBroodBitchesHome() {
  const theme = useTheme().pagesTheme
  return (
    <div className='mainContainer'>
      <Meta title={'French Bull Dog Brood Bitches'} />
      <Typography variant='h3' style={theme.pageHeading}>
        French Bull Dog Brood Bitches
      </Typography>
    </div>
  )
}
