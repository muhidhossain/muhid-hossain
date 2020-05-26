import React from 'react';
import './Intro.css'

const Intro = () => {
    return (
        <div className='container intro-area'>
            <div>
                <p>Hello! I am</p>
                <h1>Muhid Hossain</h1>
                <br />
                <h3>Full Stack Developer</h3>
                <ul>
                    <li>Web Developer</li>
                    <li>Programer</li>
                    <li>Traveller</li>
                </ul>
                <button className='resume'>Get Resume</button>
                <button className='about'>About Me</button>
            </div>
        </div>
    );
};

export default Intro;