import "./login&register.css";

function LoginPage() {
  return (
    <div className="body">
      <div className="wrapper">
        <header>Login</header>
        <form action="#">
          <div className="field email">
            <div className="input-area">
              <input
                className="b"
                type="text"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
          <div className="field password">
            <div className="input-area">
              <input
                className="b"
                type="password"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="check">
            <input type="checkbox" />
            Remember me
          </div>
          <div className="pass-txt">
            <a href="#">Forgot password?</a>
          </div>
          <input className="b" type="submit" value="Login" />
        </form>
        <div>
          <hr />
          <p>Login With</p>
          <button className="btn">Google</button>
          <button className="btn">Linkedin</button>
        </div>
        <div className="sign-txt">
          Don't have an account? ? <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
