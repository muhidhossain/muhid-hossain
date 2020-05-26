import React from 'react';
import './About.css';
import profile from '../../images/profile.jpg'

const About = () => {
    return (
        <div className='container about-area'>
            <div>
                <div className="about-heading">
                    <h4>ABOUT ME</h4>
                </div>
                <div className="about-profile">
                    <p className='col-md-6'>Hello! I'm Zonayed Ahmed, a passionate software engineer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I am currently pursuing my bachelor's degree at Chandigarh University, Punjab, India(Last Year). I am available for any good job opportunities.</p>
                    <img src={profile} alt="" />
                </div>
                <button className='resume'>Get Resume</button>
                <button className='about'>My Skills</button>
            </div>
        </div>
    );
};

export default About;