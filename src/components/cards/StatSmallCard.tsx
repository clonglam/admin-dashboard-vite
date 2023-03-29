import { Box, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'

import { tokens } from '../../styles/theme'

interface Props {
  title: string
  dateRange: string
  content: string
}

const StatSmallCard = ({ title, dateRange, content }: Props) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box width="100%" bgcolor={colors.primary[400]} p={2}>
      <Stack direction="row" justifyContent="space-between" width="100%">
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="caption"
          borderRadius={2}
          px={1}
          py={0.5}
          bgcolor={colors.primary[600]}
          //   color={colors.backgroundBlack[100]}
        >
          {dateRange}
        </Typography>
      </Stack>
      <Typography variant="h3">{content}</Typography>

      <Stack
        pt={1}
        direction="row"
        justifyContent="start"
        alignItems="center"
        spacing={2}
        width="100%"
      >
        <Typography
          variant="caption"
          fontWeight={600}
          borderRadius={1}
          px={0.8}
          py={0.2}
          color={colors.greenAccent[200]}
          bgcolor={colors.greenAccent[800]}
        >
          +14%
        </Typography>

        <Typography>Since last month</Typography>
      </Stack>
    </Box>
  )
}

export default StatSmallCard
