import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useAppSelector } from './app/hooks'
import NavMenu from './components/NavMenu'
import Sider from './components/Sider'
import { selectMenuState } from './features/state/stateSlice'
import Dashboard from './pages/Dashboard'
import Team from './pages/Team'
import { ColorModeContext, useMode } from './styles/theme'

function App() {
  const [theme, colorMode] = useMode()
  const isMenuOpen = useAppSelector(selectMenuState)

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
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
      </ColorModeContext.Provider>
    </BrowserRouter>
  )
}

export default App
