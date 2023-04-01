import { useAuth0 } from '@auth0/auth0-react'
import { ListItemIcon, MenuItem } from '@mui/material'
import React from 'react'
import { MdLogin } from 'react-icons/md'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <MenuItem onClick={() => loginWithRedirect()}>
      <ListItemIcon>
        <MdLogin fontSize="small" />
      </ListItemIcon>
      Login
    </MenuItem>
  )
}

export default LoginButton
