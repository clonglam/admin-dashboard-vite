import { IconType } from 'react-icons'
import {
  AiOutlineCalendar,
  AiOutlineCloud,
  AiOutlineFile,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineTeam,
} from 'react-icons/ai'
import { BsBrush } from 'react-icons/bs'

export interface IFMenuBase {
  key: string
  title: string
  icon?: IconType
  component?: string
  query?: string
  requireAuth?: string
  route?: string
  login?: boolean
}

export interface IFMenu extends IFMenuBase {
  subs?: IFMenu[]
}

const menus: {
  menus: IFMenu[]
  others: IFMenu[] | []
} = {
  menus: [
    {
      key: '/dashboard',
      title: 'Dashboard',
      icon: AiOutlineHome,
      component: 'Dashboard',
    },
    {
      key: '/members',
      title: 'Members',
      component: 'Members',
      icon: AiOutlineTeam,
    },
    {
      key: '/orders',
      title: 'Orders',
      component: 'Orders',
      icon: AiOutlineShoppingCart,
    },
    {
      key: '/projects',
      title: 'Projects',
      component: 'Projects',
      icon: AiOutlineFundProjectionScreen,
    },
    {
      key: '/calendar',
      title: 'Calendar',
      icon: AiOutlineCalendar,
      component: 'Calendar',
    },
    {
      key: '/todos',
      title: 'Todos',
      icon: AiOutlineCloud,
      component: 'Todos',
    },
    {
      key: '/scss',
      title: 'SCSS',
      icon: BsBrush,
      component: 'Scss',
    },
    {
      key: '/docs',
      title: 'Documentation',
      icon: AiOutlineFile,
      component: 'Documentation',
    },
  ],
  others: [],
}

export default menus
