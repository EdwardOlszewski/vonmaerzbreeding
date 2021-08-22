import { Typography, useTheme } from '@material-ui/core'
import Meta from '../../../components/Meta'
import MobileImageList from '../../../components/MobileImageLine'
import retiredDogsData from '../../../data/retiredDogsData'

export default function RetiredRottHome() {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'Retired Rottweilers'} />
      <Typography variant='h3' style={theme.pageHeading}>
        Retired French Bulldogs
      </Typography>

      <MobileImageList itemData={retiredDogsData} />
    </div>
  )
}
