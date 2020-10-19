import React from 'react';
import './Intro.css';
import { Button } from '@material-ui/core';

const Intro = () => {
    return (
        <div className='container intro-area'>
            <div>
                <p>Hello! I am</p>
                <h1>Muhid Hossain</h1>
                <br />
                <h3>Front End Developer</h3>
                <ul>
                    <li>Web Developer</li>
                    <li>Traveller</li>
                    <li>Programer</li>
                </ul>
                <a href="https://github.com//muhidhossain/muhid-hossain/raw/master/src/data/MyResume.pdf" id="raw-url" role="button" class="btn btn-sm BtnGroup-item ">
                    <Button id='resume'>Get Resume</Button>
                </a>
                <a style={{ textDecoration: 'none' }} href="/about">
                    <Button id='about'>About Me</Button>
                </a>
            </div>
        </div>
    );
};

export default Intro;