import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import "./components/myStyles.css";
import Home from "./pages/Home";
import About from "./components/About";
import Pages from "./components/Pages";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Account from "./pages/Account/Account";
import Singup from "./pages/singup/Singup";
import Create from "./components/create/Create";
import Details from "./components/details/Details";

const App = () => {
  return (
    <>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/home" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/pages" exact element={<Pages />} />
            <Route path="/blog" exact element={<Blog />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/details/:id" Component={Details} />
            <Route path="/account" Component={Account} />
            <Route path="/" Component={Login} />
            <Route path="/register" Component={Singup} />
            <Route path="/create" Component={Create} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
