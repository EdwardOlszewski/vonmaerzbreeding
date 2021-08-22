import { Typography, useTheme } from '@material-ui/core'
import Meta from '../../../components/Meta'

export default function RetiredRottHome() {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'Retired Rottweilers'} />
      <Typography variant='h3' style={theme.pageHeading}>
        Retired Rottweilers
      </Typography>
    </div>
  )
}
