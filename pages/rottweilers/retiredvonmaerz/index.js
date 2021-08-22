import { Typography, useTheme, Hidden } from '@material-ui/core'
import Meta from '../../../components/Meta'
import MobileImageList from '../../../components/MobileImageLine'
import retiredVonMaerzData from '../../../data/retiredVonMaerzData'
import ImgLine from '../../../components/ImgLine'

export default function RetiredRottVonMaerzHome() {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'Retired Von Maerz Rottweilers'} />
      <Typography variant='h3' style={theme.pageHeading}>
        Retired Von Maerz Rottweilers
      </Typography>

      <Hidden mdDown>
        <ImgLine itemData={retiredVonMaerzData} />
      </Hidden>

      <Hidden lgUp>
        <MobileImageList itemData={retiredVonMaerzData} />
      </Hidden>
    </div>
  )
}
