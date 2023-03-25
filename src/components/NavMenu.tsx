import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material'
import React, { useContext } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

import { useAppDispatch } from '../app/hooks'
import { toggleSideMenu } from '../features/state/stateSlice'
import { ColorModeContext, tokens } from '../styles/theme'

type Props = {
  user: string
}
const NavMenu = ({ user }: Props): JSX.Element => {
  const dispatch = useAppDispatch()
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  return (
    <Box
      className="navbar"
      sx={{ backgroundColor: colors.backgroundBlack[100] }}
    >
      <Grid width="200px">
        <Typography
          display="inline"
          className="branding-text"
          variant="h3"
          whiteSpace="nowrap"
          color={colors.grey[100]}
        >
          Logo
        </Typography>
        <Button
          onClick={() => {
            dispatch(toggleSideMenu())
          }}
        >
          <GiHamburgerMenu />
        </Button>
      </Grid>
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? (
          <MdOutlineDarkMode />
        ) : (
          <MdOutlineLightMode />
        )}
      </IconButton>
    </Box>
  )
}

export default NavMenu
