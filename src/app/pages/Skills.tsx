import './css/skills.css';

import skills from '../data/skills.data'

export default function Skills() {
    return (
        <>
            <section className="skills-section" id='skills'>
                <div className="heading">
                    <h2>What i know</h2>
                </div>
                <div className="skills-container flex flex-row flex-wrap justify-center">
                        {
                            skills.map((sCat, index) => {
                                return (

                                    <div key={sCat.skillCategory + " " + index} className="cat-card m-2">

                                        <div className="skil-heading">
                                            <h3>{sCat.skillCategory}</h3>
                                        </div>

                                        <div className="skill-card flex justify-center flex-wrap">
                                            {
                                                sCat.skills.map(skill => {
                                                    return (
                                                        <div key={skill.name} className="skill flex flex-col justify-center items-center">
                                                            <div className="skill-img flex justify-center items-center">
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
            </section>
        </>
    )
}
