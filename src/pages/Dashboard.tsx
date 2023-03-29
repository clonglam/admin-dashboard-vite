import { Box, Grid, Typography } from '@mui/material'
import _ from 'lodash'
import React from 'react'

import StatSmallCard from '../components/cards/StatSmallCard'
import { DashboardDataType, data } from '../data/dashboardData'

const Dashboard = () => {
  return (
    <div>
      <Typography>Dashboard</Typography>

      <Grid container spacing={2} mt={2}>
        <Grid container item xs={12} md={6} width="100%" spacing={2}>
          {_.toArray(data as DashboardDataType).map((section) => {
            const { id, content, badgeTag, title, rate } = section
            return (
              <Grid container item xs={12} md={6} width={'100%'} key={id}>
                <StatSmallCard
                  title={title}
                  dateRange={badgeTag}
                  content={content}
                  rate={rate}
                />
              </Grid>
            )
          })}
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            borderRadius={2}
            width={'100%'}
            height={'100%'}
            sx={{ backgroundColor: 'gold' }}
          ></Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
