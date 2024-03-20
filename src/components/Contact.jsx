import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Header from "./header/Header";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contact">
        <p>Contact Me:</p>
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
  );
};

export default Contact;
