import { exp } from '../data/exp.data';
import './css/exp.css';

export default function Experience() {
    return (
        <>
            <section className="exp-section" id='projects'>
                <div className="heading" id="">
                    <h2>Experience</h2>
                </div>
                <div className="flex flex-row justify-between xl:px-10">
                    <div className="exp-container flex flex-col flex-wrap justify-center gap-5">
                        {
                            exp.map((exp, i)=>(
                                <div className='h-30 flex flex-col ml-5 exp-card' key={i}>
                                    <div className='exp-card-wrapper p-4'>
                                        <div className="position">
                                            <h2 className='text-lg font-bold'>{exp.position}</h2>
                                        </div>
                                        <div className="org">
                                            <span className='text-sm'>{exp.org}</span> | 
                                            <span className="location text-sm">{exp.location}</span>
                                        </div>
                                        <div className="org">
                                            <span className='text-sm italic'>- {exp.desc}</span>
                                        </div>
                                    </div>
                                    <div className="line pl-4">
                                        <div className="w-12 bg-white"></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    
                    <div className="img-wrapper  flex justify-center items-center hidden lg:block">
                        <div className="img">
                            <img className='w-full' src="./../../src/assets/Programming.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

