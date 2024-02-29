import './css/skills.css';

import { skills } from './../data/skills2.data'

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
                            // single skill
                            // skills.map((skill) => {
                            //     return (
                            //         <div key={skill.name} className="skill">
                            //                 <div className="skill-img">
                            //                     <img src={skill.icon} alt="gf" />
                            //                 </div>
                            //                 <div className="skill-title">
                            //                     <span>{skill.name}</span>
                            //                 </div>
                            //         </div>
                            //     )
                            // })

                            skills.map((sCat, index) => {
                                return (

                                    <div key={sCat.skillCategory + " " + index} className="cat-card m-2">

                                        <div className="skil-heading">
                                            <h3>{sCat.skillCategory}</h3>
                                        </div>

                                        <div className="skill-card">
                                            {
                                                sCat.skills.map(skill => {
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
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </>
    )
}
