import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import TodoListPage from '../pages/TodoListPage'
import ErrorPage from '../pages/ErrorPage'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TodoListPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  )
}

export default Routes