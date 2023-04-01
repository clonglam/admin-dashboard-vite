import {
  Box,
  createTheme,
  CssBaseline,
  Link,
  ThemeProvider,
  Typography,
} from '@mui/material'
import { useMemo } from 'react'

import { useAppSelector } from './app/hooks'
import NavMenu from './components/layoutComponents/NavMenu'
import Sider from './components/layoutComponents/sider/Sider'
import { selectColorMode, selectMenuState } from './features/state/stateSlice'
import Routes from './routes'
import { getDesignTokens, tokens } from './styles/theme'

function App() {
  const isMenuOpen = useAppSelector(selectMenuState)
  const colorMode = useAppSelector(selectColorMode)

  const theme = useMemo(
    () => createTheme(getDesignTokens(colorMode)),
    [colorMode]
  )

  const colors = tokens(theme.palette.mode)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="layout">
        {/* Header */}
        <header className="header">
          <NavMenu />
        </header>

        {/* Sidebar */}
        <aside className={` ${isMenuOpen && 'open'}`}>
          <Sider open={isMenuOpen} />
        </aside>

        {/* Main content */}
        <main
          style={{ background: colors.primary[800] }}
          className={`main ${isMenuOpen && 'open'} `}
        >
          <Routes />
        </main>

        {/* Footer */}
        <footer className="footer">
          <Typography style={{ display: 'inline-block' }}>
            {' '}
            {`Project Design by  `}{' '}
          </Typography>
          <Link
            style={{ textAlign: 'center' }}
            href="https://github.com/clonglam/admin-dashboard-vite"
          >
            {` Hugo`}.
          </Link>
          {}
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
