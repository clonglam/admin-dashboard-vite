import { tokens } from '../styles/theme'

export const data = {
  sales: {
    id: '1',
    title: 'Salses Today',
    content: '$ 430.00',
    rate: 32,
    badgeTag: 'Today',
    since: 'last month',
  },
  newClient: {
    id: '2',
    title: 'New Client',
    content: '52',
    rate: 5,
    badgeTag: 'Today',
    since: 'last month',
  },
  trafficReceived: {
    id: '3',
    title: 'Traffic',
    content: '52',
    rate: 5,
    badgeTag: 'Today',
    since: 'last month',
  },
  emailSent: {
    id: '4',
    title: 'Email Sent',
    content: '24',
    rate: 5,
    badgeTag: 'Today',
    since: 'last month',
  },
}

export type DashboardDataType = {
  [x: string]: {
    id: string
    title: string
    content: string
    rate: number
    badgeTag: string
    since: string
  }
}

export const mockLineData = [
  {
    id: 'japan',
    color: tokens('dark').greenAccent[500],
    data: [
      {
        x: 'plane',
        y: 101,
      },
      {
        x: 'helicopter',
        y: 75,
      },
      {
        x: 'boat',
        y: 36,
      },
      {
        x: 'train',
        y: 216,
      },
      {
        x: 'subway',
        y: 35,
      },
      {
        x: 'bus',
        y: 236,
      },
      {
        x: 'car',
        y: 88,
      },
      {
        x: 'moto',
        y: 232,
      },
      {
        x: 'bicycle',
        y: 281,
      },
      {
        x: 'horse',
        y: 1,
      },
      {
        x: 'skateboard',
        y: 35,
      },
      {
        x: 'others',
        y: 14,
      },
    ],
  },
  {
    id: 'france',
    color: tokens('dark').blueAccent[300],
    data: [
      {
        x: 'plane',
        y: 212,
      },
      {
        x: 'helicopter',
        y: 190,
      },
      {
        x: 'boat',
        y: 270,
      },
      {
        x: 'train',
        y: 9,
      },
      {
        x: 'subway',
        y: 75,
      },
      {
        x: 'bus',
        y: 175,
      },
      {
        x: 'car',
        y: 33,
      },
      {
        x: 'moto',
        y: 189,
      },
      {
        x: 'bicycle',
        y: 97,
      },
      {
        x: 'horse',
        y: 87,
      },
      {
        x: 'skateboard',
        y: 299,
      },
      {
        x: 'others',
        y: 251,
      },
    ],
  },
  {
    id: 'us',
    color: tokens('dark').redAccent[200],
    data: [
      {
        x: 'plane',
        y: 191,
      },
      {
        x: 'helicopter',
        y: 136,
      },
      {
        x: 'boat',
        y: 91,
      },
      {
        x: 'train',
        y: 190,
      },
      {
        x: 'subway',
        y: 211,
      },
      {
        x: 'bus',
        y: 152,
      },
      {
        x: 'car',
        y: 189,
      },
      {
        x: 'moto',
        y: 152,
      },
      {
        x: 'bicycle',
        y: 8,
      },
      {
        x: 'horse',
        y: 197,
      },
      {
        x: 'skateboard',
        y: 107,
      },
      {
        x: 'others',
        y: 170,
      },
    ],
  },
]

export const memberData = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
]
