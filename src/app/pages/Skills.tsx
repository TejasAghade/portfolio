import './css/skills.css';

import skills from '../data/skills.data'
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Skills() {

    const ref = useRef(null);
    const isInView = useInView(ref, {once : true});

    const mainControl = useAnimation();

    useEffect(()=>{
        console.log(isInView);
        
        if(isInView){
            mainControl.start("visible");
        }
    }, [isInView]); 
  

    return (
        <>
        
            <section ref={ref} className="skills-section" id='skills'>
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
                                                            <motion.div
                                                                variants={{
                                                                hidden: {opacity: 0, y : 40},
                                                                visible : {opacity : 1, y : 0}
                                                                }}
                                                                initial = "hidden"
                                                                animate={mainControl}
                                                                transition={{duration : 0.5, delay : 0.25}}
                                                            > 
                                                                <div className="skill-img flex justify-center items-center">
                                                                    <img src={skill.icon} alt="gf" />
                                                                </div>
                                                                <div className="skill-title">
                                                                    <span>{skill.name}</span>
                                                                </div>
                                                            </motion.div>
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
