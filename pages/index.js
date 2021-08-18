import {
  Grid,
  Typography,
  Button,
  useTheme,
  makeStyles,
} from '@material-ui/core'
import Meta from '../components/Meta'

export default function Home(props) {
  const theme = useTheme().pagesTheme

  return (
    <>
      <Meta title={'Home'} />
      <Typography variant='h3' style={theme.pageHeading}></Typography>
      <Grid container>
        <Grid item xs={12} style={theme.indexContainer}>
          <div
            style={{
              display: 'inline-block',
              textAlign: 'left',
            }}
          >
            <Typography variant='h4' style={theme.indexText}>
              Frenchie & Rottweiler Puppies Fall&Summer 2021
              <br />
              Interested in a pet or breed quality puppy?
            </Typography>

            <Button style={theme.contactButton}>Contact Us</Button>
          </div>
        </Grid>
      </Grid>
    </>
  )
}
