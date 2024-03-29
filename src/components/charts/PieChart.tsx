import { useTheme } from '@mui/material'
import ReactECharts from 'echarts-for-react'

import { tokens } from '../../styles/theme'

const PieChart = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const option = {
    color: [
      colors.chartColors[0],
      colors.chartColors[1],
      colors.chartColors[2],
      colors.chartColors[3],
    ],
    textStyle: {
      color: colors.grey[500],
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    stateAnimation: {
      animation: 'auto',
      animationDuration: 1000,
      animationDurationUpdate: 500,
      animationEasing: 'cubicInOut',
      animationEasingUpdate: 'cubicInOut',
      animationThreshold: 2000,
      progressiveThreshold: 3000,
      progressive: 400,
      hoverLayerThreshold: 3000,
      useUTC: false,
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: [
        'Direct Visit',
        'Email Marketing',
        'Video Advertising',
        'Organic Search',
      ],
      textStyle: {
        color: colors.grey[200],
        textBorderWidth: 0,
      },
    },
    label: {
      color: colors.grey[200],
      textborderWidth: 0,
    },
    series: [
      {
        name: 'Traffic acquisition',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '60%'],
        data: [
          { value: 335, name: 'Direct Visit' },
          { value: 310, name: 'Email Marketing' },
          { value: 135, name: 'Video Advertising' },
          { value: 1548, name: 'Organic Search' },
        ],
        textStyle: {
          color: colors.grey[200],
          textBorderWidth: 0,
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  }

  return <ReactECharts option={option} onEvents={{}} />
}

export default PieChart
