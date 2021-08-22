import { Typography, useTheme } from '@material-ui/core'
import Meta from '../../../components/Meta'

export default function RetiredRottVonMaerzHome() {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'Rottweiler Retired Von Maerz'} />
      <Typography variant='h3' style={theme.pageHeading}>
        Rottweiler Von Maerz
      </Typography>
    </div>
  )
}
