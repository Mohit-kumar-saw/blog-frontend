import React from "react";
import "./header.css";
import User from "../user/User";
import { Link, useNavigate } from "react-router-dom";
import blog from "../../images/blog-logo2.png";

const Header = () => {
  const nav =useNavigate()
  return (
    <div className="main-header">
      <header>
        <div className="navcontainer">
          <div className="scontainer flex">
            <div className="logo">
              <img src={blog} alt="" onClick={()=>{
                   nav("/home")
              }} />
            </div>
            <nav>
              <ul className="navbar flex">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
               
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="account">
              <User />
            </div>
          </div>
        </div>
      </header>

      <div className="serach"></div>
    </div>
  );
};

export default Header;
