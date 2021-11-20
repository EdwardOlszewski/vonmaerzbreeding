import { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Image from 'next/image'
import {
  Button,
  Menu,
  MenuItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#3E3E3E',
  },
  navIcon: {
    marginRight: '-1.5rem',
    marginLeft: '1rem',
    float: 'left',
  },
  button: {
    background: 'none',
    color: 'white',
    boxShadow: 'none',

    '&:hover': {
      background: 'none',
      boxShadow: 'none',
      color: 'gray',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1vmax',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '.8vmax',
    },
  },
}))

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

const RottMenu = ({ dogType, pictureName }) => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div style={{ display: 'inline-block' }}>
      <ListItemIcon className={classes.navIcon}>
        <Image
          src={`/icons/${pictureName}`}
          alt='rottIcon'
          width={'40%'}
          height={'40%'}
        />
      </ListItemIcon>
      <Button
        className={classes.button}
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        onClick={handleClick}
      >
        {dogType}
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
          <Link href={`/${dogType}/studdogs`}>
            <ListItemText primary='Stud Dogs' />
          </Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <Link href={`/${dogType}/broodbitches`}>
            <ListItemText primary='Brood Bitches' />
          </Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <Link href={`/${dogType}/puppylitters`}>
            <ListItemText primary='Puppy Litters' />
          </Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <Link href={`/${dogType}Contract.pdf`} target='_blank' download>
            <ListItemText primary='Puppy Contract' />
          </Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <Link href={`/${dogType}/retireddogs`}>
            <ListItemText primary='Retired Dogs' />
          </Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <Link href={`/${dogType}/retiredvonmaerz`}>
            <ListItemText primary='Retired Von Marez' />
          </Link>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  )
}

export default RottMenu
