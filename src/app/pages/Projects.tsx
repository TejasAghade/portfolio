import projects from '../data/projects.data';
import './css/projects.css';

export default function Projects() {
  return (
    <>
        <div className="projects-section" id='projects'>
            <div className="heading" id="">
                <h2>Projects</h2>
            </div>
            <div className="projects-container flex flex-row flex-wrap justify-between">
                {
                    projects.map((project)=>{
                        return (
                            <div key={project.name} className="project-card flex flex-row justify-center items-center">
                                <div className="left p-2 flex flex-col justify-center">
                                    <img src={project.imgUrl} alt="" />
                                </div>
                                <div className="right p-3">
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
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
