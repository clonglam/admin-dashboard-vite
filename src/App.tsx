import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { useMemo } from 'react'

// import { Route, Routes } from 'react-router-dom'
import { useAppSelector } from './app/hooks'
import NavMenu from './components/NavMenu'
import Sider from './components/Sider'
import { selectColorMode, selectMenuState } from './features/state/stateSlice'
import Routes from './routes'
// import ApplicationForm from './pages/ApplicationForm'
// import Calendar from './pages/Calendar'
// import Dashboard from './pages/Dashboard'
// import Members from './pages/Members'
// import Orders from './pages/Orders'
// import Team from './pages/Team'
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
        <aside className={` ${isMenuOpen ? 'open' : ''}`}>
          <Sider open={isMenuOpen} />
        </aside>

        {/* Main content */}
        <main className="main" style={{ background: colors.primary[800] }}>
          <Routes />
          {/* <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/member" element={<Members />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/applicationform" element={<ApplicationForm />} />
          </Routes> */}
        </main>

        {/* Footer */}
        <footer className="footer">
          <div style={{ width: '100%' }}>Design by Hugo</div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
