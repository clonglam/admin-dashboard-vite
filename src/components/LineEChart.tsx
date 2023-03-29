import { Box, Typography, useTheme } from '@mui/material'
import * as echarts from 'echarts'
import ReactECharts from 'echarts-for-react'
import React from 'react'

import { tokens } from '../styles/theme'

interface Props {
  title: string
}

const LineEChart = ({ title }: Props) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  }

  return (
    <Box borderRadius={2} p={3} sx={{ background: colors.primary[400] }}>
      <Typography variant="body1" mb={3}>
        {title}
      </Typography>
      <ReactECharts option={options} />
    </Box>
  )
}

export default LineEChart
