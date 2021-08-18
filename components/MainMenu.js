import Link from 'next/link'
import { ListItem, ListItemText, List, useTheme } from '@material-ui/core'
import navTheme from './themes/navTheme'

const MainMenu = () => {
  // assign theme to use for styles
  const theme = useTheme().navTheme

  return (
    <List style={theme.textColor}>
      <Link href='/'>
        <ListItem button style={theme.listItemHover}>
          <ListItemText primary='Home' />
        </ListItem>
      </Link>

      <Link href='/contact'>
        <ListItem button style={theme.listItemHover}>
          <ListItemText primary='Contact Us' />
        </ListItem>
      </Link>

      <Link href='/puppyquestonnaire'>
        <ListItem button style={theme.listItemHover}>
          <ListItemText primary='Puppy Questionnaire' />
        </ListItem>
      </Link>
    </List>
  )
}

export default MainMenu
