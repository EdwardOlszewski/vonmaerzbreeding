import {
  Typography,
  useTheme,
  Divider,
  Hidden,
  Container,
} from '@material-ui/core'
import Meta from '../../../components/Meta'
import MobileImageList from '../../../components/MobileImageLine'
import isabeauFrenchBulldog from '../../../data/isabeauFrenchBulldog'
import lauretteFrenchBuldog from '../../../data/lauretteFrenchBuldogData'
import lindeFrenchBulldog from '../../../data/lindeFrenchBulldogData'
import ImgLine from '../../../components/ImgLine'
import groupShot from '../../../public/isabeauFrenchBulldog/groupShot.jpg'
import lindeAward from '../../../public/lindeFrenchBulldog/lindeAward.jpg'
import Image from 'next/image'

export default function RetiredRottVonMaerzHome() {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'Retired Von Maerz Rottweilers'} />
      <Typography variant='h3' style={theme.pageHeading}>
        Retired Von Maerz French Bull Dogs
      </Typography>

      <Container maxWidth='md'>
        <Image src={groupShot} alt={'groupShot'} layout='responsive' />
        <Typography variant='subtitle2' style={{ textAlign: 'left' }}>
          Pictured from left to right
          <br />
          - NED. & INT CH. Daphnebrit V. Marver’s Fortuna. <br />
          - Multi V. Rated Excellenz V. Moezel’s Oever. <br />
          - Multi V. Rated Isabeau V. Moezel’s Oever. <br />
          - CH. Lady Laurette V. Moezel’s
          <br />
          - Grandfather INT CH. Only One Matuchowa Frajda
          <br />
        </Typography>
      </Container>
      <Divider style={theme.divider} />
      <Hidden mdDown>
        <ImgLine title={'Isabeau'} itemData={isabeauFrenchBulldog} />

        <Divider style={theme.divider} />
        <ImgLine title={'Laurette'} itemData={lauretteFrenchBuldog} />

        <Divider style={theme.divider} />
        <ImgLine title={'Linde'} itemData={lindeFrenchBulldog} />
      </Hidden>

      <Hidden lgUp>
        <MobileImageList title={'Isabeau'} itemData={isabeauFrenchBulldog} />

        <Divider style={theme.divider} />
        <MobileImageList title={'Laurette'} itemData={lauretteFrenchBuldog} />

        <Divider style={theme.divider} />
        <MobileImageList title={'Linde'} itemData={lindeFrenchBulldog} />
      </Hidden>
    </div>
  )
}
