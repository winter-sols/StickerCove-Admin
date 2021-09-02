import { useHistory } from "react-router-dom"
import LoginComponent from "components/Login"

import { ROUTERS } from "configurations"

const Login = () => {
  const history = useHistory()

  const onLoginHandler = () => {
    history.push(ROUTERS.DASHBOARD)
  }

  return <LoginComponent onLoginHandler={onLoginHandler} />
}

export default Login
