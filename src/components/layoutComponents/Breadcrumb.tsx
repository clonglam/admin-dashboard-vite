import { Breadcrumbs, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

type BreadCurmbType = {
  component: string
  text: string
  href?: string
}

interface Props {
  sectionLayer: BreadCurmbType[]
}

const Breadcrumb = ({ sectionLayer }: Props) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {sectionLayer.map(({ component, text }, index) => (
        <Link to="component" key={`${component}`}>
          <Typography>{text}</Typography>
        </Link>
      ))}
    </Breadcrumbs>
  )
}

export default Breadcrumb
