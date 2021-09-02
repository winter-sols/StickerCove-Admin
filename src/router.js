import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ROUTERS } from "configurations"

import Login from "pages/Login"
import Dashboard from "pages/Dashboard"

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path={"/"} render={() => <Login />} />
      <Route path={ROUTERS.LOGIN} component={Login} />
      <Route path={ROUTERS.DASHBOARD} component={Dashboard} />
    </Switch>
  </Router>
)

export default AppRouter
