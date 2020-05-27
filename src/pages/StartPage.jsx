import React from 'react'
import { Link } from 'react-router-dom'

import { routes } from '../config/constants'

const StartPage = () => {
  return (
    <div>
        <Link to={routes.async}>
          <h3>Chamas Assincronas</h3>
        </Link>
    </div>
  )
}

export default StartPage
