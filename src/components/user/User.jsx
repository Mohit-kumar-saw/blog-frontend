import React, { useState } from "react";
import "./user.css";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

const User = () => {
  const nav = useNavigate();
  const token = JSON.parse(localStorage.getItem("userData"));
  const [profileOpen, setProfileOpen] = useState(false);

  const close = () => {
    setProfileOpen(true);
  };
  return (
    <div className="profile">
      {token.token ? (
        <>
          <button className="img" onClick={() => setProfileOpen(!profileOpen)}>
            <img src="" alt="" />
          </button>
          {profileOpen && (
            <div
              className="openProfile"
              onClick={close}
              onKeyDown={() => {
                setProfileOpen(true);
              }}
            >
              <div className="image">
                <img src="" alt="" />
              </div>
              <div className="navigatons">
                <div className="text">
                  <h4>monty</h4>
                  <p>Los Angeles ,CA</p>
                </div>
                {/* <div className="post">
                  <Link to="/create">
                    <p>Create Post</p>
                  </Link>
                </div>

                <Link to={"/account"}>
                  <p>My Account</p>
                </Link>

                <button className="box">
                  <h4>My Order</h4>
                </button>
                <button className="box">
                  <h4>Wishlist</h4>
                </button>
                <button className="box">
                  <h4>Help</h4>
                </button>
                <button
                  className="box"
                  onClick={() => {
                    localStorage.removeItem("userData");
                    nav("/");
                    setProfileOpen(false);
                  }}
                >
                  <h4>Log Out</h4>
                </button> */}

                <ul>
                  <li>
                    <a href="/create"> Create Post</a>
                  </li>
                  <li>
                    <a href="/account"> Update Account</a>
                  </li>
                  <li>
                    <a href="/blog"> My Blog</a>
                  </li>
                  <li>
                    <a href=""> Contact Us</a>
                  </li>
                  <li
                    onClick={() => {
                      localStorage.removeItem("userData");
                      nav("/");
                      setProfileOpen(false);
                    }}
                    className="logout"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          )}
        </>
      ) : (
        <Link to="/account">
          <button>My Account</button>
        </Link>
      )}
    </div>
  );
};

export default User;
