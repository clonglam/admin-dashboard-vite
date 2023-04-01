import { Chip } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import { Project } from '../../data/mockdata'

interface Props {
  project: Project
  colors: { [x: string]: { [grad: number]: string } }
}

export default function projectCard({ project, colors }: Props) {
  const { id, title, description, status } = project

  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="168"
        image={`https://source.unsplash.com/random/900×700/?technology/${id}`}
      />
      <CardContent sx={{ backgroundColor: colors.primary[600] }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Chip
          label={status}
          color={
            status === 'Finished'
              ? 'success'
              : status === 'In Progress'
              ? 'warning'
              : 'error'
          }
        />
        <Typography py={2} variant="body2" color="text.secondary">
          {description.length > 180
            ? description.slice(0, 180) + '...'
            : description}
        </Typography>
      </CardContent>

      <CardActions sx={{ backgroundColor: colors.primary[600] }}>
        <Button size="small">Share</Button>
        <Button size="small" sx={{ backgroundColor: colors.primary[600] }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
