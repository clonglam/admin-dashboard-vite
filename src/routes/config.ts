import { IconType } from 'react-icons'
import {
  AiOutlineCalendar,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineTeam,
} from 'react-icons/ai'

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
  ],
  others: [],
}

export default menus
