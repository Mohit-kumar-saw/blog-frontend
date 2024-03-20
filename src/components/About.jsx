import React from 'react'
import monty from '../images/monty.jpg'
import Header from './header/Header'
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const About = () => {
  return (
    <div>
    <Header/>
      <div className="about-page">

      <h1>About Blog Application</h1>
      <p>
        This blog application is created using the MERN (MongoDB, Express, React,
        Node.js) stack. It allows users to read and write blog posts on various
        topics. The application includes features like authentication, CRUD operations
        for blog posts, and a responsive user interface.
      </p>

      <div className="about-img">
        <img src={monty} alt=""  width={"300px"}/>
      </div>
      <h2>About Mohit Kumar Saw</h2>
      <p>
        I am a software developer with expertise in
        full-stack web development. I enjoys creating web applications that
        are both functional and user-friendly. I'm proficient in
        technologies like React, Node.js, MongoDB, and more.
      </p>
    </div>
    <div className="footer">
        <div className="mid-footer">
          <div className="mid-left">
            <p className="p">
              Unleash your artistic prowess to fashion exquisite products that
              radiate beauty.
            </p>
          </div>
          <div className="mid-right ">
            <p className="p">
              Passionate Artist, MERN stack developer and UI/UX designer
              creating captivating web experiences. Blending aesthetics and
              functionality to deliver beautiful and user-friendly applications.
            </p>

            <div className="social">
              <p className="p">Follow me:</p>
              <i>
                <a href="https://www.instagram.com/montykumar5597/">
                  {" "}
                  <InstagramIcon />
                </a>
              </i>
              <i>
                <a href="https://github.com/Mohit-kumar-saw">
                  {" "}
                  <GitHubIcon />
                </a>
              </i>
              <i>
                <a href="https://www.linkedin.com/in/mohit-kumar-83048422a/">
                  <LinkedInIcon />
                </a>
              </i>
            </div>
          </div>
        </div>

        <div className="foot-foot">
          <p className="p">
            Copyright 2023 developed by mohit kumar- All right reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
