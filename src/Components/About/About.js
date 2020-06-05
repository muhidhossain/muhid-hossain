import React from 'react';
import './About.css';
import profile from '../../images/profile.jpg';

const About = () => {
    return (
        <div className='container about-area'>
            <div>
                <div className="about-heading">
                    <h4>ABOUT ME</h4>
                </div>
                <div className="about-profile">
                    <div className='col-md-6'>
                        <p>Hello! I'm Muhid Hossain, a passionate web developer. I develop web applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I am currently pursuing my bachelor's degree at University of Barishal, Barishal, Bangladesh(2nd Year). I am available for any good job opportunities.</p>
                        <button className='resume'>Get Resume</button>
                        <a href="mySkills">
                            <button className='about'>My Skills</button>
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