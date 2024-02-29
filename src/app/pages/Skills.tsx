import './css/skills.css';

import { skills } from './../data/skills.data'

export default function Skills() {
    return (
        <>
            <div className="skills-container">
                <div className="heading" id="skills">
                    <h2>Skills</h2>
                </div>
                <div className="icons-container">
                    <div className="skills-wrapper">
                        {
                            skills.map((skill) => {
                                return (
                                    <div key={skill.name} className="skill">
                                            <div className="skill-img">
                                                <img src={skill.icon} alt="gf" />
                                            </div>
                                            <div className="skill-title">
                                                <span>{skill.name}</span>
                                            </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
