import { withAuthenticationRequired } from '@auth0/auth0-react'
import React from 'react'

const Team = () => {
  return <div>Teams</div>
}

export default withAuthenticationRequired(Team)
