import { Box, Grid, Typography, useTheme } from '@mui/material'
import _ from 'lodash'

import StatSmallCard from '../components/cards/StatSmallCard'
import BarChart from '../components/charts/BarChart'
import LineEChart from '../components/charts/LineEChart'
import Layout from '../components/Layout'
import PieChart from '../components/charts/PieChart'
import { DashboardDataType, data } from '../data/mockdata'
import { tokens } from '../styles/theme'

const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Layout
      section="Dashboard"
      description={`Welcome back. This is the custom dashboard created by hugo. Free Feel to visit my Github or my website.`}
    >
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
        {/* </Grid> */}

        {/* <Grid container spacing={2}> */}
        <Grid item xs={12} md={4}>
          <Box borderRadius={2} p={3} sx={{ background: colors.primary[600] }}>
            <Typography variant="body1" mb={3}>
              Traffic Acquisition
            </Typography>
            <PieChart />
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box borderRadius={2} p={3} sx={{ background: colors.primary[600] }}>
            <Typography variant="body1" mb={3}>
              Traffic Acquisition
            </Typography>
            <BarChart />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Dashboard
