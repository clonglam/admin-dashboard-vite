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
