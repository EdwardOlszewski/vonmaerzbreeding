import { Typography, useTheme } from '@material-ui/core'
import Meta from '../../../components/Meta'
import MobileImageList from '../../../components/mobileComponents/MobileImageLine'
import retiredDogsData from '../../../data/retiredDogsData'
import ImgLine from '../../../components/ImgLine'

export default function RetiredRottHome() {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'Retired Rottweilers'} />
      <Typography variant='h3' style={theme.pageHeading}>
        Retired Rottweilers
      </Typography>
      <ImgLine itemData={retiredDogsData} />
      <MobileImageList itemData={retiredDogsData} />
    </div>
  )
}
