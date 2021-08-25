import { withStyles } from '@material-ui/core/styles'
import Image from 'next/image'
import {
  MenuItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  makeStyles,
  ListItemIcon,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Link from 'next/link'
import RottDogIcon from '../../public/icons/rott.png'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accDetails: {
    display: 'inline-block',
  },
  acc: {
    outline: 'none',
    boxShadow: 'none',
  },
}))

const StyledMenuItem = withStyles((theme) => ({
  root: {
    display: 'inline-block',
    paddingTop: 10,
    paddingBottom: 10,
  },
}))(MenuItem)

export default function RottMenu() {
  const classes = useStyles()

  return (
    <div style={{ display: 'inline-block' }}>
      <Accordion className={classes.acc}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <ListItemIcon>
            <Image src={RottDogIcon} width={'40%'} height={'40%'} />
          </ListItemIcon>
          <Typography>Rottweilers</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accDetails}>
          <StyledMenuItem>
            <Link href='/rottweilers/studdogs'>
              <ListItemText className={classes.linkBtn} primary='Stud Dogs' />
            </Link>
          </StyledMenuItem>

          <StyledMenuItem>
            <Link href='/rottweilers/broodbitches'>
              <ListItemText
                className={classes.linkBttm}
                primary='Brood Bitches'
              />
            </Link>
          </StyledMenuItem>

          <StyledMenuItem>
            <Link href='/rottweilers/puppylitters'>
              <ListItemText primary='Puppy Litters' />
            </Link>
          </StyledMenuItem>

          <StyledMenuItem>
            <Link
              href='/VonMaerzRottweilerContract.pdf'
              target='_blank'
              download
            >
              <ListItemText primary='Puppy Contract' />
            </Link>
          </StyledMenuItem>

          <StyledMenuItem>
            <Link href='/rottweilers/retireddogs'>
              <ListItemText primary='Retired Dogs' />
            </Link>
          </StyledMenuItem>

          <StyledMenuItem>
            <Link href='/rottweilers/retiredvonmaerz'>
              <ListItemText primary='Retired Von Marez' />
            </Link>
          </StyledMenuItem>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
