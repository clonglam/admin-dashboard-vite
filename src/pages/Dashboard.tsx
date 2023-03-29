import { Grid, Typography } from '@mui/material'
import React from 'react'

import StatSmallCard from '../components/cards/StatSmallCard'

const Dashboard = () => {
  return (
    <div>
      <Typography>Dashboard</Typography>
      <Grid>
        <StatSmallCard title="Sales Today" dateRange="Today" content="2.532" />
      </Grid>
    </div>
  )
}

export default Dashboard
