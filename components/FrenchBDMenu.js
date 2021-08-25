import { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Image from 'next/image'
import {
  Button,
  Menu,
  MenuItem,
  ListItemText,
  useTheme,
  ListItemIcon,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Link from 'next/link'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    width: '200px',
  },
})((props) => (
  <Menu
    elevation={1}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

const StyledMenuItem = withStyles((theme) => ({
  root: {
    paddingTop: 2,
    paddingBottom: 2,
    '&:focus': {
      backgroundColor: 'none',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: 'none',
      },
    },
  },
}))(MenuItem)

const FrenchBDMenu = () => {
  // assign theme to use for styles
  const theme = useTheme().navTheme

  const [anchorEl, setAnchorEl] = useState(null)
  const [studOpen, setStudOpen] = useState(false)
  const [openBrood, setOpenBrood] = useState(false)
  const [openLitter, setOpenLitter] = useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div style={{ display: 'inline-block' }}>
      <ListItemIcon style={theme.navIcon}>
        <Image src={'/icons/bullDog.png'} width={'30%'} height={'30%'} />
      </ListItemIcon>
      <Button
        className='Button'
        style={theme.menuButton}
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        color='primary'
        onClick={handleClick}
      >
        French Bulldogs
        <ExpandMoreIcon />
      </Button>

      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <Link href='/frenchbulldogs/studdogs'>
            <ListItemText primary='Stud Dogs' />
          </Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <Link href='/frenchbulldogs/broodbitches'>
            <ListItemText primary='Brood Bitches' />
          </Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <Link href='/frenchbulldogs/puppylitters'>
            <ListItemText primary='Puppy Litters' />
          </Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <Link
            href='/VonMaerzFrenchBullDogContract.pdf'
            target='_blank'
            download
          >
            <ListItemText primary='Puppy Contract' />
          </Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <Link href='/frenchbulldogs/retireddogs'>
            <ListItemText primary='Retired Dogs' />
          </Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <Link href='/frenchbulldogs/retiredvonmaerz'>
            <ListItemText primary='Retired Von Marez' />
          </Link>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  )
}

export default FrenchBDMenu
