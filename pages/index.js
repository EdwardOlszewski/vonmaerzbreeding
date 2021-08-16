import Image from 'next/image'
import pagesTheme from '../styles/pagesTheme'
import { Grid, Typography, Button, Hidden } from '@material-ui/core'
import logo from '../images/longLogo2.png'
import logo2 from '../images/logo.png'
import Meta from '../components/Meta'

export default function Home() {
  const classes = pagesTheme()

  return (
    <>
      <Meta title={'Home'} />
      <Typography variant='h3' className={classes.pageHeading}></Typography>
      <Grid container>
        <Grid item xs={12} className={classes.indexContainer}>
          <div
            style={{
              display: 'inline-block',
              textAlign: 'left',
            }}
          >
            <Typography variant='h4' className={classes.indexText}>
              Frenchie & Rottweiler Puppies Fall&Summer 2021
              <br />
              Interested in a pet or breed quality puppy?
            </Typography>

            <Button className={classes.contactButton}>Contact Us</Button>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

/*

  <Typography>
            Frenchie & Rottweiler Puppies Fall&Summer 2021
          </Typography>

          <Typography variant='h4' className={classes.indexText}>
            Interested in a pet or breed quality puppy?
          </Typography>
*/
