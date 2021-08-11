import { useState } from 'react'
import Link from 'next/link'
import navTheme from './themes/navTheme'
import {
  makeStyles,
  List,
  ListItem,
  Collapse,
  ListItemText,
  Typography,
  ThemeProvider,
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

const RottweilersMenu = () => {
  const classes = navTheme()
  const [open, setOpen] = useState(false)
  const [studOpen, setStudOpen] = useState(false)
  const [openBrood, setOpenBrood] = useState(false)
  const [openLitter, setOpenLitter] = useState(false)

  return (
    <List className={classes.textColor}>
      <ListItem
        className={classes.listItemHover}
        button
        onClick={() => setOpen(!open)}
      >
        <ListItemText primary={'French Bulldogs'} />

        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout='auto' unmountOnExit>
        <List>
          <ListItem
            button
            onClick={() => setStudOpen(!studOpen)}
            className={classes.nested2nd}
          >
            <ListItemText primary='Stud Dogs' />
            {studOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={studOpen} timeout='auto' unmountOnExit></Collapse>
        </List>

        <List>
          <ListItem
            button
            onClick={() => setOpenBrood(!openBrood)}
            className={classes.nested2nd}
          >
            <ListItemText primary='Brood Bitches' />
            {openBrood ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={openBrood} timeout='auto' unmountOnExit></Collapse>
        </List>

        <List>
          <ListItem
            button
            onClick={() => setOpenLitter(!openLitter)}
            className={classes.nested2nd}
          >
            <ListItemText primary='Puppy Litters' />
            {openLitter ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={openBrood} timeout='auto' unmountOnExit></Collapse>
        </List>

        <List component='div' disablePadding>
          <Link href='/rottweilers/puppycontract'>
            <ListItem button className={classes.nested}>
              <ListItemText primary='Puppy Contract' />
            </ListItem>
          </Link>
        </List>

        <List component='div' disablePadding>
          <Link href='/rottweilers/dogspedigree'>
            <ListItem button className={classes.nested}>
              <ListItemText primary='Dogs in Our Pedigree' />
            </ListItem>
          </Link>
        </List>

        <List component='div' disablePadding>
          <Link href='/rottweilers/retireddogs'>
            <ListItem button className={classes.nested}>
              <ListItemText primary='Retired Dogs' />
            </ListItem>
          </Link>
        </List>

        <List component='div' disablePadding>
          <Link href='/rottweilers/retiredvonmarez'>
            <ListItem button className={classes.nested}>
              <ListItemText primary='Retired Von Marez' />
            </ListItem>
          </Link>
        </List>
      </Collapse>
    </List>
  )
}

export default RottweilersMenu
