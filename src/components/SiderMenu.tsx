import { Box, List, Typography } from '@mui/material'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

import { IFMenu } from '../routes/config'

type SiderMenuProps = {
  menus: any[]
  onClick: (key: string) => void
  selectedKeys: string[]
  openKeys?: string[]
  open: boolean
  onOpenChange: (v: string[]) => void
}

const renderMenuItem = (item: IFMenu, { open }: SiderMenuProps) => (
  <Box key={item.key}>
    <Link
      to={(item.route || item.key) + (item.query || '')}
      className="container"
    >
      {item.icon && (
        <item.icon style={{ display: 'inline' }} className="item-icon" />
      )}

      {open && (
        <Typography variant="body1" className="item-text">
          {item.title}
        </Typography>
      )}
    </Link>
  </Box>
)

const SiderMenu = (props: SiderMenuProps) => {
  const { menus, open } = props

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={clsx('sidebar', open && 'open')}
    >
      {menus.map((item: IFMenu) => renderMenuItem(item, props))}
    </List>
  )
}

export default SiderMenu
