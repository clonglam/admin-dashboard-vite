import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useAppSelector } from './app/hooks'
import NavMenu from './components/layout/NavMenu'
import Sider from './components/layout/Sider'
import { selectColorMode, selectMenuState } from './features/state/stateSlice'
import Dashboard from './pages/Dashboard'
import Team from './pages/Team'
import { getDesignTokens } from './styles/theme'

function App() {
  const isMenuOpen = useAppSelector(selectMenuState)
  const colorMode = useAppSelector(selectColorMode)

  const theme = useMemo(
    () => createTheme(getDesignTokens(colorMode)),
    [colorMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="layout">
        {/* Header */}
        <header className="header">
          <NavMenu user="test" />
        </header>

        {/* Sidebar */}
        <aside className={` ${isMenuOpen ? 'open' : ''}`}>
          <Sider open={isMenuOpen} />
        </aside>

        {/* Main content */}
        <main className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div style={{ width: '100%' }}>
            Ant Design ©2023 Created by Ant UED
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
