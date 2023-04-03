import { Divider, Link, Typography } from '@mui/material'
import React from 'react'

import Layout from '../components/layoutComponents/Layout'

const Documentation = () => {
  const packageUsed = [
    {
      name: 'React',
      href: 'https://facebook.github.io/react/',
      description: '(Basic React Package)',
    },
    {
      name: 'react-router-dom',
      href: 'https://reactrouter.com/en/main',
      description: 'Package use for SPA routing',
    },
    {
      name: 'Auth0',
      href: 'https://auth0.com/docs/quickstart/spa/react/interactive',
      description: 'authentication use, API is required',
    },
    {
      name: 'react-hook-form',
      href: 'https://react-hook-form.com/',
      description:
        '(Performant, flexible and extensible forms with easy-to-use validation.)',
    },
    {
      name: 'reduxjs/toolkit',
      href: 'https://redux-toolkit.js.org/rtk-query/overview',
      description: ' (Awasome state managment tools)',
    },
  ]
  return (
    <Layout section="Documentation">
      <h3>Admin Dashboard</h3>
      <p>
        Welcom to visit my{' '}
        <Link href="https://github.com/clonglam/admin-dashboard-vite">
          github
        </Link>{' '}
        to know more. This repository is a quite start kit for me, for creating
        different dashboard layout or charting.
      </p>

      <Divider />
      <h3>Package dependencies</h3>
      <p>Project created by Vite and used following package.</p>
      {packageUsed.map((p, index) => (
        <Typography key={`package_${index}`}>
          <Link href={p.href}>{p.name}</Link>
          {`    ${p.description}`}
        </Typography>
      ))}

      <Divider />
      <h3>Code quality</h3>
      <p>Typescript, Eslint, prettie are used to ensure the code quality.</p>

      <Divider />
      <h3>Themeing & styling</h3>
      <p>
        MUI and SASS are used in styling. Used Mui theming to crate dark & light
        mode.
      </p>
    </Layout>
  )
}
export default Documentation
