import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material'
import { AiOutlineBell } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

import { useAppDispatch } from '../app/hooks'
import { toggleColorMode, toggleSideMenu } from '../features/state/stateSlice'
import { tokens } from '../styles/theme'

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
      <Grid
        container
        width="200px"
        // justifyContent="space-between"
        alignItems="center"
      >
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
          <GiHamburgerMenu color={colors.grey[100]} />
        </Button>
      </Grid>

      <Grid>
        <IconButton onClick={() => dispatch(toggleColorMode())}>
          {theme.palette.mode === 'dark' ? (
            <MdOutlineDarkMode />
          ) : (
            <MdOutlineLightMode />
          )}
        </IconButton>

        <IconButton onClick={() => console.log('Alert clicked')}>
          <AiOutlineBell />
        </IconButton>
        <IconButton onClick={() => console.log('Setting clicked')}>
          <FiSettings />
        </IconButton>
      </Grid>
    </Box>
  )
}

export default NavMenu
