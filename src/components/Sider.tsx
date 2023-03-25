import { IconType } from 'react-icons'
import { AiOutlineHome, AiOutlineTeam } from 'react-icons/ai'
import { Link } from 'react-router-dom'

// import type { IFMenu } from '../../routes/config'
// import routes from '../../routes/config'
// import Icon from '../../untils/Icon'

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
    title: 'Home',
    icon: AiOutlineHome,
    component: '/dashboard',
  },
  {
    key: '/app/dashboard/team',
    title: 'Team',
    icon: AiOutlineTeam,
    component: '/team',
  },
  // {
  //   key: '/app/dashboard/blog',
  //   title: 'React Query v4 Blog',
  //   icon: 'reactQueryIcon',
  //   component: 'Blog',
  // },
  // {
  //   key: '/app/dashboard/disgnpackage',
  //   title: 'Disgn Package',
  //   icon: 'reactQueryIcon',
  //   component: 'DisgnPackage',
  // },
  // {
  //   key: '/app/dashboard/table',
  //   title: 'React Table',
  //   icon: 'reactTableIcon',
  //   component: 'ReactTableDemo',
  // },
]

const renderMenuItem = (item: IFMenu, isSidebarOpen: boolean): JSX.Element => (
  <Link
    to={item.component}
    // to={(item.route ?? item.key) + (item.query ?? '')}
    key={item.key}
    className="container"
  >
    <span className="item-icon">{item.icon != null && <item.icon />}</span>
    {isSidebarOpen && <span className="item-text">{item.title} </span>}
  </Link>
)

const Sider = ({ open }: Props): JSX.Element => {
  // const [menu, setMenu] = useState<IMenu>({ openKeys: [''], selectedKey: '' })

  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>
      <div className="sidebar-content">
        {menus.map((item: IFMenu, index: number) => renderMenuItem(item, open))}
        {/* <li className="sidebar-item">
          <i className="fa fa-home" />
        </li>
        <li className="sidebar-item">
          <i className="fa fa-user" />
        </li>
        <li className="sidebar-item">
          <i className="fa fa-envelope" />
        </li>
        <li className="sidebar-item">
          <i className="fa fa-cog" />
        </li> */}
      </div>
    </div>
  )
}

export default Sider
