import { Box, Breadcrumbs, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import MemberTable from '../scenes/Members/MemberTable'

const Member = () => {
  return (
    <Box>
      <Typography variant="h3" mb={1}>
        Members
      </Typography>

      <MemberTable />
    </Box>
  )
}

export default Member
