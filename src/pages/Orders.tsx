import { Button, Chip, Grid, IconButton, Stack, useTheme } from '@mui/material'
import { CellContext } from '@tanstack/react-table'
import { CiSquareRemove } from 'react-icons/ci'
import { FaEdit } from 'react-icons/fa'
import { NumericFormat } from 'react-number-format'

import Layout from '../components/Layout'
import CustomTable from '../components/ReactTable/CustomTable'
import { mockOrderData, OrderStatus, PaymentMethod } from '../data/mockdata'
import { tokens } from '../styles/theme'

type OrdersType = {
  id: string
  product: string
  total: string
  date: string
  orderStatus: OrderStatus
  paymentMethod: PaymentMethod
}
const Orders = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns = [
    {
      accessorKey: 'id',
      header: () => <span>Order ID</span>,
      cell: (props: CellContext<OrdersType, string>) => (
        <span className="cursor-pointer text-blue-600 hover:underline">
          {props.getValue()}
        </span>
      ),
      footer: (props: CellContext<OrdersType, string>) => props.column.id,
    },
    {
      accessorKey: 'date',
      header: () => <span>Date</span>,
      footer: (props: CellContext<OrdersType, string>) => props.column.id,
    },
    {
      accessorKey: 'product',
      cell: (props: CellContext<OrdersType, string>) => (
        <span className="cursor-pointer text-blue-600 hover:underline">
          {props.getValue()}
        </span>
      ),
      header: () => <span>Project Name</span>,
      footer: (props: CellContext<OrdersType, string>) => props.column.id,
    },

    {
      accessorKey: 'total',
      header: () => <span>Total</span>,
      cell: (props: CellContext<OrdersType, number>) => (
        <NumericFormat
          value={props.getValue().toFixed(2)}
          decimalScale={2}
          prefix="$"
          thousandSeparator=","
          displayType="text"
        />
      ),
      footer: (props: CellContext<OrdersType, string>) => props.column.id,
    },
    {
      accessorKey: 'orderStatus',
      header: () => <div className="text-center">Status</div>,
      cell: (props: CellContext<OrdersType, OrderStatus>) => (
        <Chip
          color={
            props.getValue() === 'Shipped'
              ? 'success'
              : props.getValue() === 'Processing'
              ? 'warning'
              : 'error'
          }
          label={props.getValue()}
        />
      ),
      footer: (props: CellContext<OrdersType, string>) => props.column.id,
    },
    {
      accessorKey: 'paymentMethod',
      header: () => <div className="text-center">Payment Method</div>,

      footer: (props: CellContext<OrdersType, string>) => props.column.id,
    },
    {
      accessorKey: 'action',
      header: () => <div style={{ textAlign: 'right' }}>Action</div>,
      cell: () => (
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <IconButton onClick={() => console.log('Alert clicked')}>
            <FaEdit />
          </IconButton>
          <IconButton>
            <CiSquareRemove />
          </IconButton>
        </Stack>
      ),
      footer: (props: CellContext<OrdersType, string>) => props.column.id,
    },
  ]

  return (
    <Layout
      section={'Order'}
      description="Using Tanstack Table with MUI comoponent combine with pagniating function"
    >
      <Grid container justifyContent="end" alignItems="center">
        <Grid
          item
          component={Button}
          variant="contained"
          sx={{ background: colors.primary[400] }}
        >
          New Order
        </Grid>
      </Grid>

      <CustomTable
        tableData={mockOrderData}
        tableColumns={columns}
        isLoading={false}
      />
    </Layout>
  )
}

export default Orders
