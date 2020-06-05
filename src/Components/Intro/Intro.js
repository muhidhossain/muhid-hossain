import React from 'react';
import './Intro.css';

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
                    <li>Traveller</li>
                    <li>Programer</li>
                </ul>
                <button className='resume'>Get Resume</button>
                <a href="/about">
                    <button className='about'>About Me</button>
                </a>
            </div>
        </div>
    );
};

export default Intro;