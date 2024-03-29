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

export const mockDataContacts = [
  {
    id: 1,
    name: 'Jon Snow',
    email: 'jonsnow@gmail.com',
    age: 35,
    phone: '(665)121-5454',
    address: '0912 Won Street, Alabama, SY 10001',
    city: 'New York',
    zipCode: '10001',
    registrarId: 123512,
  },
  {
    id: 2,
    name: 'Cersei Lannister',
    email: 'cerseilannister@gmail.com',
    age: 42,
    phone: '(421)314-2288',
    address: '1234 Main Street, New York, NY 10001',
    city: 'New York',
    zipCode: '13151',
    registrarId: 123512,
  },
  {
    id: 3,
    name: 'Jaime Lannister',
    email: 'jaimelannister@gmail.com',
    age: 45,
    phone: '(422)982-6739',
    address: '3333 Want Blvd, Estanza, NAY 42125',
    city: 'New York',
    zipCode: '87281',
    registrarId: 4132513,
  },
  {
    id: 4,
    name: 'Anya Stark',
    email: 'anyastark@gmail.com',
    age: 16,
    phone: '(921)425-6742',
    address: '1514 Main Street, New York, NY 22298',
    city: 'New York',
    zipCode: '15551',
    registrarId: 123512,
  },
  {
    id: 5,
    name: 'Daenerys Targaryen',
    email: 'daenerystargaryen@gmail.com',
    age: 31,
    phone: '(421)445-1189',
    address: '11122 Welping Ave, Tenting, CD 21321',
    city: 'Tenting',
    zipCode: '14215',
    registrarId: 123512,
  },
  {
    id: 6,
    name: 'Ever Melisandre',
    email: 'evermelisandre@gmail.com',
    age: 150,
    phone: '(232)545-6483',
    address: '1234 Canvile Street, Esvazark, NY 10001',
    city: 'Esvazark',
    zipCode: '10001',
    registrarId: 123512,
  },
  {
    id: 7,
    name: 'Ferrara Clifford',
    email: 'ferraraclifford@gmail.com',
    age: 44,
    phone: '(543)124-0123',
    address: '22215 Super Street, Everting, ZO 515234',
    city: 'Evertin',
    zipCode: '51523',
    registrarId: 123512,
  },
  {
    id: 8,
    name: 'Rossini Frances',
    email: 'rossinifrances@gmail.com',
    age: 36,
    phone: '(222)444-5555',
    address: '4123 Ever Blvd, Wentington, AD 142213',
    city: 'Esteras',
    zipCode: '44215',
    registrarId: 512315,
  },
  {
    id: 9,
    name: 'Harvey Roxie',
    email: 'harveyroxie@gmail.com',
    age: 65,
    phone: '(444)555-6239',
    address: '51234 Avery Street, Cantory, ND 212412',
    city: 'Colunza',
    zipCode: '111234',
    registrarId: 928397,
  },
  {
    id: 10,
    name: 'Enteri Redack',
    email: 'enteriredack@gmail.com',
    age: 42,
    phone: '(222)444-5555',
    address: '4123 Easer Blvd, Wentington, AD 142213',
    city: 'Esteras',
    zipCode: '44215',
    registrarId: 533215,
  },
  {
    id: 11,
    name: 'Steve Goodman',
    email: 'stevegoodmane@gmail.com',
    age: 11,
    phone: '(444)555-6239',
    address: '51234 Fiveton Street, CunFory, ND 212412',
    city: 'Colunza',
    zipCode: '1234',
    registrarId: 92197,
  },
]

export const mockOrderData = [
  {
    id: '#000010',
    product: 'Backpack',
    date: '2023-01-02',
    total: 32,
    paymentMethod: 'Visa',
    orderStatus: 'Shipped',
  },
  {
    id: '#000011',
    product: 'Glass Teapot',
    date: '2023-01-06',
    total: 22,
    paymentMethod: 'Master',
    orderStatus: 'Cancelled',
  },
  {
    id: '#000012',
    product: 'Glass Teapot',
    date: '2023-01-21',
    total: 48,
    paymentMethod: 'PayPal',
    orderStatus: 'Processing',
  },
  {
    id: '#000013',
    product: 'Glass Teapot',
    date: '2023-01-06',
    total: 32,
    paymentMethod: 'Master',
    orderStatus: 'Shipped',
  },
  {
    id: '#000014',
    product: 'Party material',
    date: '2023-01-06',
    total: 32,
    paymentMethod: 'Master',
    orderStatus: 'Shipped',
  },

  {
    id: '#000017',
    product: 'Loremm',
    date: '2023-01-06',
    total: 15,
    paymentMethod: 'Visa',
    orderStatus: 'Shipped',
  },
  {
    id: '#000018',
    product: 'Tea',
    date: '2023-01-06',
    total: 2,
    paymentMethod: 'Master',
    orderStatus: 'Shipped',
  },
  {
    id: '#000019',
    product: 'Jam',
    date: '2023-01-22',
    total: 61,
    paymentMethod: 'Visa',
    orderStatus: 'Shipped',
  },
  {
    id: '#000020',
    product: 'Mosue',
    date: '2023-01-06',
    total: 32,
    paymentMethod: 'Master',
    orderStatus: 'Processing',
  },
  {
    id: '#000021',
    product: 'Keyboard',
    date: '2023-01-06',
    total: 32,
    paymentMethod: 'Visa',
    orderStatus: 'Processing',
  },
  {
    id: '#000022',
    product: 'Cake',
    date: '2023-01-06',
    total: 32,
    paymentMethod: 'Master',
    orderStatus: 'Shipped',
  },
]

export type OrderStatus = 'Shipped' | 'Cancelled' | 'Processing'
export type PaymentMethod = 'Visa' | 'PayPal' | 'Mastercard'

export const mockProjectData: Project[] = [
  {
    id: '1',
    title: 'Website Design',
    status: 'In Progress',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I",
  },
  {
    id: '2',
    title: 'Demo Project',
    status: 'Finished',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I",
  },
  {
    id: '3',
    title: 'R&D',
    status: 'In Progress',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I",
  },
  {
    id: '4',
    title: 'Backend Server Maintenance',
    status: 'In Progress',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I",
  },
  {
    id: '5',
    title: 'Front Wheel Brakes',
    status: 'On hold',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I",
  },
]

export type Project = {
  id: string
  title: string
  status: ProjectStatus
  description: string
}

export type ProjectStatus = 'Finished' | 'In Progress' | 'On hold'
