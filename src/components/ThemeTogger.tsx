import { IconButton, useTheme } from '@mui/material'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

import { useAppDispatch } from '../app/hooks'
import { toggleColorMode } from '../features/state/stateSlice'

const ThemeTogger = () => {
  const dispatch = useAppDispatch()
  const theme = useTheme()

  return (
    <IconButton onClick={() => dispatch(toggleColorMode())}>
      {theme.palette.mode === 'dark' ? (
        <MdOutlineDarkMode />
      ) : (
        <MdOutlineLightMode />
      )}
    </IconButton>
  )
}

export default ThemeTogger
