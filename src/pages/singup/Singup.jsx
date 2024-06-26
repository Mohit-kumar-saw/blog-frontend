import React, { useState } from "react";
import "./singup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import pic from "../../images/pic.png";
import blog from "../../images/blog-logo2.png";
import { Button, TextField } from "@mui/material";
import { BASE_URL } from "../../Url";

const Singup = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleShow = () => {
    setShow(!show);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!email || !username || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/auth/register`, { username, email, password });
      localStorage.setItem("userData", JSON.stringify(response.data));
      console.log(localStorage.getItem("userData"));
      navigate("/home");
      alert("Registration successful");
    } catch (error) {
      console.error(error);
      alert("An error occurred during registration");
    }
  };

  return (
    <>
      <div className="singup">
        <div className="login-header">
          <div className="logo">
            <img src={blog} alt="" />
          </div>
          <div className="msg">
            <p className="msg1"> Your Blog -</p>{" "}
            <p className="msg2">is Your Best Netowerking Tool</p>
          </div>
          <div className="sing-up">
            <Link to={"/"}>
              {" "}
              <button>
                <p>Sing-In</p> <div className="green"></div>
              </button>
            </Link>
          </div>
        </div>
        <div className="singupContainer">
          <form>
            <p className="login-heading">Register</p>
            <div className="input">
            

              <TextField
                id="standard-basic"
                className="login-input"
                label="Enter User Name"
                variant="outlined"
                color="secondary"
                name="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(event) => {
                  if (event.code == "Enter") {
                    // console.log(event);
                    HandleRegister();
                  }
                }}
              />
              <TextField
                id="standard-basic"
                className="login-input"
                label="Enter Email"
                variant="outlined"
                color="secondary"
                name="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(event) => {
                  if (event.code == "Enter") {
                    // console.log(event);
                    handleRegister();
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
                    handleRegister();
                  }
                }}
              />

              {/* <input type="checkbox" name="" id="" onClick={handleShow} /> */}
            </div>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleRegister}
              className="login-btn"
            >
              Sing-Up
            </Button>
            <div className="link">
              <p>Allready have an account </p>
              <Link to="/">Sing-In</Link>
            </div>
          </form>
          <div className="img-container">
            <img src={pic} alt="" width={"400px"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Singup;
