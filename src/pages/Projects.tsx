import { Grid, useTheme } from '@mui/material'

import Layout from '../components/Layout'
import { mockProjectData } from '../data/mockdata'
import ProjectCard from '../scenes/Projects/projectCard'
import { tokens } from '../styles/theme'

export default function Projects() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Layout
      section="Project"
      description="Simple Card with dynamic data fetch."
    >
      <Grid container width={'100%'} spacing={2}>
        {mockProjectData.map((project) => (
          <Grid item key={project.id} xs={12} md={4} lg={3}>
            <ProjectCard project={project} colors={colors} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}
