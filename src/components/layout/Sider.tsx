import { Box, Typography, useTheme } from '@mui/material'
import { IconType } from 'react-icons'
import { AiOutlineHome, AiOutlineTeam } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { tokens } from '../../styles/theme'

interface Props {
  open: boolean
}
interface IFMenu {
  key: string
  title: string
  icon: IconType
  component: string
}
const menus = [
  {
    key: '/app/dashboard/index',
    title: 'Dashboard',
    icon: AiOutlineHome,
    component: '/dashboard',
  },
  {
    key: '/app/dashboard/team',
    title: 'Team',
    icon: AiOutlineTeam,
    component: '/team',
  },
]

const Sider = ({ open }: Props): JSX.Element => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box
      className={`sidebar ${open ? 'open' : ''}`}
      bgcolor={colors.backgroundBlack[700]}
    >
      <div className="sidebar-content">
        {menus.map((item: IFMenu) => (
          <Link to={item.component} key={item.key} className="container">
            <span className="item-icon">
              {item.icon != null && <item.icon color={colors.grey[100]} />}
            </span>
            {open && (
              <Typography className="item-text" color={colors.grey[100]}>
                {item.title}{' '}
              </Typography>
            )}
          </Link>
        ))}
      </div>
    </Box>
  )
}

export default Sider
