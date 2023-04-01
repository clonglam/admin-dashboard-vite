import { Box, Button, Grid, Typography, useTheme } from '@mui/material'
import { GiHamburgerMenu } from 'react-icons/gi'

import { useAppDispatch } from '../../app/hooks'
import { toggleSideMenu } from '../../features/state/stateSlice'
import { tokens } from '../../styles/theme'
import AccountMenu from './AccountMenu'

const NavMenu = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
      className="navbar"
      justifyContent="space-between"
      sx={{ backgroundColor: colors.primary[600] }}
    >
      <Grid container width="200px" alignItems="center">
        <Button
          className="nav-toggler"
          onClick={() => {
            dispatch(toggleSideMenu())
          }}
        >
          <GiHamburgerMenu
            color={colors.grey[100]}
            style={{ display: 'inline' }}
          />
        </Button>

        <Typography
          display="inline"
          className="branding-text"
          variant="h3"
          whiteSpace="nowrap"
          color={colors.grey[100]}
        >
          Logo
        </Typography>
      </Grid>

      <AccountMenu />
    </Box>
  )
}

export default NavMenu
