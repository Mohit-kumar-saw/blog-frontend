import React, { useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import pic from "../../images/pic.png";
import blog from "../../images/blog-logo2.png";

const Login = () => {
  const baseUrl = "http://localhost:5000";
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/api/auth/login`, {
        name,
        password,
      });

      if (response.status === 200) {
        console.log("Login successful");
        localStorage.setItem("userData", JSON.stringify(response.data));

        navigate("/home");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="login-header">
        <div className="logo">
          <img src={blog} alt="" />
        </div>
        <div className="msg">
          <p className="msg1"> Your Blog -</p>{" "}
          <p className="msg2">is Your Best Netowerking Tool</p>
        </div>
        <div className="sing-up">
          <Link to={"/register"}>
            {" "}
            <button>
              <p>Sing-Up</p> <div className="green"></div>
            </button>
          </Link>
        </div>
      </div>
      <div className="loginContainer">
        <form onSubmit={handleSubmit}>
          <p className="login-heading">Login</p>
          <div className="input">
            <TextField
              id="standard-basic"
              className="login-input"
              label="Enter User Name"
              variant="outlined"
              color="secondary"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(event) => {
                if (event.code == "Enter") {
                  // console.log(event);
                  handleSubmit();
                }
              }}
            />

            <TextField
              id="outlined-password-input"
              label="Password"
              className="login-input"
              type="password"
              autoComplete="current-password"
              color="secondary"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(event) => {
                if (event.code == "Enter") {
                  // console.log(event);
                  handleSubmit();
                }
              }}
            />
            {/* <div className="show-password">
              show:
              <input
                className="check"
                type="checkbox"
                name="Show"
                onChange={handleClick}
                checked={showPassword}
                style={{ background: "white", color: "white" }}
              />
            </div> */}
          </div>
          <Button
            variant="outlined"
            color="secondary"
            className="login-btn "
            onClick={handleSubmit}
          >
            Login
          </Button>
          <div className="link">
            Don't have an account? <Link to="/register">Sing-Up</Link>
          </div>
        </form>
        <div className="img-container">
          <img src={pic} alt="" width={"400px"} />
        </div>
      </div>
    </div>
  );
};

export default Login;
