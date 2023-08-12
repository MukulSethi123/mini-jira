import { ChangeEventHandler, useState } from "react";
import "./login.scss";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, email: event.target.value });
  };

  const onPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData({ ...formData, password: event.target.value });
  };

  const signUp = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };
  const login = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };
  return (
    <div className="login">
      <div className="login__left_side">
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
      </div>
      <div className="login__right_side">
        <h1 className="login_header">Mini Jira</h1>
        <form className="login_form">
          <input
            placeholder="email"
            value={formData.email}
            onChange={onEmailChange}
          />
          <input
            placeholder="password"
            value={formData.password}
            onChange={onPasswordChange}
            type="password"
          />
          <div className="login_actions">
            <button onClick={login}>login</button>
            <button onClick={signUp}>Sign-Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
