function RegisterPage() {
  return (
    <div className="body">
      <div className="wrapper">
        <header>Register</header>
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
          <div className="field password">
            <div className="input-area">
              <input
                className="b"
                type="password"
                placeholder="Confirm password"
                required
              />
            </div>
          </div>
          <input className="b" type="submit" value="Register" />
        </form>
        <div className="sign-txt">
          Do you have an account ? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
