import projects from '../data/projects.data';
import './css/projects.css';

export default function Projects() {
    return (
        <>
            <section className="projects-section" id='projects'>
                <div className="heading" id="">
                    <h2>Projects</h2>
                </div>
                <div className="projects-container flex flex-row flex-wrap justify-center">
                    {
                        projects.map((project) => {
                            return (
                                <div key={project.name} className="project-card flex flex-row justify-center items-center">
                                    <div className="left p-2 flex flex-col justify-center">
                                        <img src={project.imgUrl} alt="" />
                                    </div>
                                    <div className="right p-3 flex flex-col justify-between">
                                        <div className='for-card'>
                                            <div className="title mb-3">
                                                <p>{project.name}</p>
                                                </div>
                                                <div className="info">
                                                    <div className="desc">
                                                        <span>{project.desc}</span>
                                                    </div>
                                                    <div className="skills mt-1">
                                                    { 
                                                        project.skills.map((skill)=><span key={skill} >{skill} </span>) 
                                                    }
                                                    </div>
                                                </div>
                                        </div>

                                        <div className="links flex flex-row items-end justify-end">
                                            <a href={project.codeUrl} target='_blank'><span className="link text-sm text-amber-300">code /&gt;</span></a>
                                        </div>

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
