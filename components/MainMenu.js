import Link from 'next/link'
import { ListItem, ListItemText, List } from '@material-ui/core'
import navTheme from './themes/navTheme'

const MainMenu = () => {
  const classes = navTheme()

  return (
    <List className={classes.textColor}>
      <Link href='/'>
        <ListItem button className={classes.listItemHover}>
          <ListItemText primary='Home' />
        </ListItem>
      </Link>

      <Link href='/contact'>
        <ListItem button className={classes.listItemHover}>
          <ListItemText primary='Contact Us' />
        </ListItem>
      </Link>

      <Link href='/puppyquestonnaire'>
        <ListItem button className={classes.listItemHover}>
          <ListItemText primary='Puppy Questionnaire' />
        </ListItem>
      </Link>
    </List>
  )
}

export default MainMenu
