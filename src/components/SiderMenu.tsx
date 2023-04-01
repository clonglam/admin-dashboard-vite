import { Box, List, Typography, useTheme } from '@mui/material'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

import { IFMenu } from '../routes/config'
import { tokens } from '../styles/theme'

type SiderMenuProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  menus: any[]
  onClick: (key: string) => void
  selectedKeys: string[]
  openKeys?: string[]
  open: boolean
  onOpenChange: (v: string[]) => void
}

const renderMenuItem = (
  item: IFMenu,
  { open }: SiderMenuProps,
  colors: { [x: string]: { [grad: number]: string } }
) => (
  <Box key={item.key}>
    <Link
      to={(item.route || item.key) + (item.query || '')}
      className="container"
    >
      {item.icon && (
        <item.icon
          style={{ display: 'inline' }}
          className="item-icon"
          size={18}
        />
      )}

      {open && (
        <Typography
          variant="body1"
          className="item-text"
          color={colors.grey[100]}
        >
          {item.title}
        </Typography>
      )}
    </Link>
  </Box>
)

const SiderMenu = (props: SiderMenuProps) => {
  const { menus, open } = props
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={clsx('sidebar', open && 'open')}
      sx={{ backgroundColor: colors.primary[600] }}
    >
      {menus.map((item: IFMenu) => renderMenuItem(item, props, colors))}
    </List>
  )
}

export default SiderMenu
