import Image from 'next/image'
import dogPic from '../images/headerDog.png'
import familyPic from '../images/headerFamily.png'
import {
  Grid,
  Typography,
  Container,
  useTheme,
  Card,
  CardContent,
  CardMedia,
} from '@material-ui/core'
import Meta from '../components/Meta'

const About = () => {
  const theme = useTheme().pagesTheme

  return (
    <div className='mainContainer'>
      <Meta title={'About Us'} />
      <Typography variant='h3' style={theme.pageHeading}>
        About Us
      </Typography>

      <Grid container justifyContent='center'>
        <Grid item xs={12} lg={8} xl={7}>
          <Container style={theme.imgContainer}>
            <Grid xs={12} container>
              <Grid xs={6} item>
                <div style={{ padding: '5px' }}>
                  <Image src={dogPic} alt={'dogPic1'} />
                </div>

                <Container>
                  <Typography variant='caption'>
                    Int.Ch. Guess V. Moezel&apos;s Oever
                  </Typography>
                </Container>
              </Grid>

              <Grid xs={6} item>
                <div style={{ padding: '5px' }}>
                  <Image src={familyPic} alt={'dogPic2'} />
                </div>
                <Container>
                  <Typography variant='caption'>
                    Multi. V-1 Bella vom Hammerbachtel
                  </Typography>
                </Container>
              </Grid>
            </Grid>
          </Container>

          <Typography>
            Our foundation bitch was Bea Vom Sittard, who was imported from
            Germany in 1990. Bea was a great friend to our family as well as a
            producer of many V-Rated dogs. Bea had extreme breed-type and was
            often mistaken to be a male. Bea was the primary reason for our
            family’s love for this wonderful breed.
          </Typography>
          <br />
          <Typography>
            Bea’s most famous puppy was Egor Von Maerz, who was many times V-1
            Rated and was a top competitor in the United States in the sport of
            Schutzhund. Egor was well-known for his powerful protection
            routines, but maybe more known for sporting disguises such as hats
            and sunglasses. The neighbor kids would come over and dress Egor up
            in many different costumes and parade him around the neighborhood.
            Egor had the most well-rounded temperament I’ve ever seen in a male
            rottweiler.
          </Typography>
          <br />
          <Typography>
            At the USRC nationals protection tournament, Egor scored a 99 point
            protection routine. Afterwards, his owner walked up to a strange
            little girl, handed her the leash and told her to “take my dog for a
            walk.” This shocked everyone nearby because he just got through
            biting a Schutzund helper less than three minutes prior. There were
            many camera crews from various news agencies at this event, mainly
            because a rottweiler in the Phoenix, AZ area had mauled a child one
            week earlier. A lot of people at the show believed they were looking
            for a negative incident to occur and catch it on tape. But instead,
            they witnessed a very well-run show and Egor’s friendliness to
            adults and children alike.
          </Typography>
          <br />
          <Typography>
            Egor was a very impressive dog to see in person. His working weight
            was 130lbs. He was 27 inches at the shoulders, with red mahogany
            markings and black eyes. He had the most complete temperament a
            rottweiler could ever have. We are constantly striving to breed
            puppies that will become the next Egor Von Maerz.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
