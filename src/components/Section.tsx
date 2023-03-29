import {
  Breadcrumbs,
  Link,
  LinkProps,
  ListItemProps,
  Typography,
} from '@mui/material'
import { ReactNode } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

interface Props {
  section: string
  children: ReactNode
}

export interface ListItemLinkProps extends ListItemProps {
  to: string
  open?: boolean
}

interface LinkRouterProps extends LinkProps {
  to: string
  replace?: boolean
}

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink as any} />
}

const breadcrumbNameMap: { [key: string]: string } = {
  '/inbox': 'Inbox',
  '/inbox/important': 'Important',
  '/trash': 'Trash',
  '/spam': 'Spam',
  '/drafts': 'Drafts',
}

const Section = ({ children }: Props) => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1
        const to = `/${pathnames.slice(0, index + 1).join('/')}`

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        )
      })}
    </Breadcrumbs>
  )
}

export default Section
