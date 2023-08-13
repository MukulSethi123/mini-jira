import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "./login.scss";
import axios from "axios";
import { loginUser } from "../Redux/actions/userActions";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const signUp = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const result = await axios({
        method: "post",
        url: "http://localhost:3070/sign-up",
        data: formData,
      });
      if (result.status === 200) {
        console.log("signUp successful");
      }
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
  const login = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const result = await axios({
        method: "post",
        url: "http://localhost:3070/login",
        data: formData,
      });
      if (result.status === 200) {
        console.log("login successful");
        dispatch(loginUser(result.data));
        navigate("/");
      }
    } catch (error: any) {
      console.log(error.response.data);
    }
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
