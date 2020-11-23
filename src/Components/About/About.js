import React from 'react';
import { Button } from '@material-ui/core';
import profile from '../../images/profile.jpg';
import './About.css';

const About = () => {
    return (
        <div className='container about-area'>
            <div>
                <div className="about-heading">
                    <h4>ABOUT ME</h4>
                </div>
                <div className="about-profile">
                    <div className='col-md-6'>
                        <p>Hello! I am Muhid Hossain, a right brained front end developer. I develop web application and currently learning data analytics with Python. Though I am learning Python, JavaScript is my first love. I like to work with JavaScript.</p>
                        <a href="https://github.com//muhidhossain/muhid-hossain/raw/master/src/data/MyResume.pdf" id="raw-url" role="button" className="btn btn-sm BtnGroup-item ">
                            <Button id='resume'>Get Resume</Button>
                        </a>
                        <a style={{ textDecoration: 'none' }} href="mySkills">
                            <Button id='about'>My Skills</Button>
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