import Image from 'next/image'
import vratedBrass from '../../../images/vratedBrass.jpg'
import vratedIss from '../../../images/vratedIss.jpg'
import { Typography, useTheme } from '@material-ui/core'
import Meta from '../../../components/Meta'
import MobileImageList from '../../../components/MobileImageLine'

const index = () => {
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

export default index
