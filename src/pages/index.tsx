import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import Main from './main'
import Profile from './profile'
import AddContent from './add-content'

export default function Pages() {
  return (
    <Fragment>
      <Router primary={false} component={Fragment}>
        <Main default />
        <Profile path="/profile" />
        <AddContent path="/add" />
      </Router>
    </Fragment>
  )
}
