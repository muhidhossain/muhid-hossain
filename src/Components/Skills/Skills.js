import React, { useState } from 'react';
import './Skills.css'
import skills from '../../data/skills'

const Skills = () => {
    const selectedName = Object.keys(skills)
    const [selectedType, setSelectedType] = useState(selectedName[0]);
    const selectedSkill = skills[selectedType];


    return (
        <div className='container skills-area'>
            <div className='skills-heading'>
                <h4>MY SKILLS</h4>
            </div>
            <div className="skills">
                <nav>
                    <ul className="nav skill-nav">
                        <li onClick={() => setSelectedType("Web")} className={selectedType === "Web" ? "active" : "deactivate"}>
                            <span>Web</span>
                        </li>
                        <li onClick={() => setSelectedType("Programming")} className={selectedType === "Programming" ? "active" : "deactivate"}>
                            <span>Programing</span>
                        </li>
                        <li onClick={() => setSelectedType("Tools")} className={selectedType === "Tools" ? "active" : "deactivate"}>
                            <span>Tools</span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="container skill">
                {
                    selectedSkill.map(({ name, percent }) => (
                        <div key={name} className="card">
                            <h4>{name}</h4>
                            <p>{percent}%</p>
                            <div style={{ width: percent + "%" }} className="progress-ar"></div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Skills;