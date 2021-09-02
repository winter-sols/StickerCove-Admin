import "./style.scss"

const Login = ({ onLoginHandler }) => (
  <div className="login flex">
    <div className="login-card flex">
      <div className="login-card-inputs flex flex-column">
        Welcome to StickerCove
        <span>LOGIN</span>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="password" />
        <button onClick={onLoginHandler}>Login</button>
      </div>
    </div>
  </div>
)

export default Login
