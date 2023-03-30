import { Box, Grid, Stack, Typography, useTheme } from '@mui/material'
import _ from 'lodash'

import StatSmallCard from '../components/cards/StatSmallCard'
import LineEChart from '../components/LineEChart'
import PieChart from '../components/PieChart'
import { DashboardDataType, data } from '../data/mockdata'
import { tokens } from '../styles/theme'

const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Stack rowGap={2}>
      <Typography>Dashboard</Typography>

      <Grid container spacing={2}>
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
          <Box borderRadius={2} p={3} sx={{ background: colors.primary[600] }}>
            <Typography variant="body1" mb={3}>
              Revenue Generate
            </Typography>

            <LineEChart />
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={8}>
          <Box borderRadius={2} p={3} sx={{ background: colors.primary[600] }}>
            <PieChart />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </Stack>
  )
}

export default Dashboard
