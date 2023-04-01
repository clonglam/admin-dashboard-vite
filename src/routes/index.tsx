import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ApplicationForm from '../pages/ApplicationForm'
import Calendar from '../pages/Calendar'
import Dashboard from '../pages/Dashboard'
import Members from '../pages/Members'
import Orders from '../pages/Orders'
import Projects from '../pages/Projects'

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/members" element={<Members />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/applicationform" element={<ApplicationForm />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default index
