import { Box, useTheme } from '@mui/material'
import { useState } from 'react'

import routes from '../routes/config'
import { tokens } from '../styles/theme'
import SiderMenu from './SiderMenu'

interface Props {
  open: boolean
}

interface IMenu {
  openKeys: string[]
  selectedKey: string
}

const Sider = ({ open }: Props): JSX.Element => {
  const [menu, setMenu] = useState<IMenu>({ openKeys: [''], selectedKey: '' })

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const menuClick = (key: string) => {
    console.log('Cliecked', key)
    setMenu((state) => ({ ...state, key }))
  }

  const openMenu = (v: string[]) => {
    setMenu((state) => ({ ...state, openKeys: v }))
  }

  return (
    <Box
      sx={{
        height: '100%',
        width: '200px',
        bgcolor: colors.primary[600],
      }}
    >
      <SiderMenu
        menus={[...routes.menus]}
        onClick={menuClick}
        open={open}
        selectedKeys={[menu.selectedKey]}
        openKeys={menu.openKeys}
        onOpenChange={openMenu}
      />
    </Box>
  )
}

export default Sider
