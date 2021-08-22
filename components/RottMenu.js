import { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Collapse,
  useTheme,
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
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

const RottMenu = () => {
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
      <Button
        className='Button'
        style={theme.menuButton}
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        color='primary'
        onClick={handleClick}
      >
        Rottweilers
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
          <Link href='/rottweilers/studdogs'>
            <ListItemText primary='Stud Dogs' />
          </Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <Link href='/rottweilers/broodbitches'>
            <ListItemText primary='Brood Bitches' />
          </Link>
        </StyledMenuItem>

        <StyledMenuItem onClick={() => setOpenLitter(!openLitter)}>
          <List>
            <ListItem style={theme.dropDownOption}>
              <ListItemText primary='Puppy Litters' />
              {openLitter ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </List>
        </StyledMenuItem>

        <StyledMenuItem disabled={!openLitter}>
          <Collapse in={openLitter} timeout='auto' unmountOnExit>
            <Link href='/rottweilers/openLitter/openLitter1'>
              <ListItemText
                style={theme.dropDownOption2}
                primary='openLitter1'
              />
            </Link>
          </Collapse>
        </StyledMenuItem>

        <StyledMenuItem>
          <Link href='/VonMaerzRottweilerContract.pdf' target='_blank' download>
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
      </StyledMenu>
    </div>
  )
}

export default RottMenu
