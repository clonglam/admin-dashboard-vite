import { Breadcrumbs, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const orders = () => {
  return (
    <Stack>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item component={Typography}>
          Orders
        </Grid>
        <Grid item component={Button} variant="contained">
          New Order
        </Grid>
      </Grid>
      <Breadcrumbs></Breadcrumbs>
      ORDER TABLE
    </Stack>
  )
}

export default orders
