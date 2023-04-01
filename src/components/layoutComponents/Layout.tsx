import { Divider, Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface Props {
  section: string
  description?: string
  children: ReactNode
}
const Layout = ({ children, section, description }: Props) => {
  return (
    <Stack rowGap={2}>
      <Typography variant="h3">{section}</Typography>
      {description && <Typography variant="body1">{description} </Typography>}
      <Divider />
      {children}
    </Stack>
  )
}

export default Layout
