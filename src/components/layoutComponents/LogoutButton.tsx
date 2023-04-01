import { useAuth0 } from '@auth0/auth0-react'
import Logout from '@mui/icons-material/Logout'
import { MenuItem } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon'
import React from 'react'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <MenuItem
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      Logout
    </MenuItem>
  )
}

export default LogoutButton
