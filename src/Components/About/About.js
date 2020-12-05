import React from "react";
import { Button } from "@material-ui/core";
import profile from "../../images/profile.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="container about-area">
      <div>
        <div className="about-heading">
          <h4>ABOUT ME</h4>
        </div>
        <div className="about-profile">
          <div className="col-md-6">
            <p>
              Hello! I am Muhid Hossain Peal. I am a Front-End-Developer. My
              core skill is base on JavaScript and I love to work with it.
              Currently I am completing my bachelor’s degree in Geology and
              Mining from University of Barishal.
            </p>
            <a
              href="https://github.com//muhidhossain/muhid-hossain/raw/master/src/data/MyResume.pdf"
              id="raw-url"
              role="button"
              className="btn btn-sm BtnGroup-item "
            >
              <Button id="resume">Get Resume</Button>
            </a>
            <a style={{ textDecoration: "none" }} href="mySkills">
              <Button id="about">My Skills</Button>
            </a>
          </div>
          <div className="col-md-6 profile">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
