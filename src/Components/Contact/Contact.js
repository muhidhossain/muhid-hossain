import React from 'react';
import './Contact.css'
import { Button } from '@material-ui/core';

const Contact = () => {
    return (
        <div className="container contact-area">
            <div className="contact-heading">
                <h4>CONTACT</h4>
            </div>
            <div className="contact-details">
                <div className="col-md-6">
                    <p>Although I am currently studying for my bachelor's degree I will be free from January 2022. And I am interested in working with any company from January 2022 that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
                    <Button id="resume">Contact Me</Button>
                </div>
                <div className="col-md-6 contact-info">
                    <div>
                        <h3>Email</h3>
                        <p>muhidhossain7@gmail.com</p>
                    </div>
                    <div>
                        <h3>Phone</h3>
                        <p>+8809638164898<small>(Bangladesh)</small></p>
                    </div>
                    <div>
                        <h3>Address</h3>
                        <p>Islampur, Babuganj, Barisal, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;