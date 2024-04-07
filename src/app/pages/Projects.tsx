import { FollowerPointerCard } from '../components/ui/following-pointer';
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
                        projects.map((project, i) => {
                            return (
                                <a href={project.codeUrl} key={i}>
                                    <FollowerPointerCard 
                                        title={
                                            <TitleComponent 
                                            title={project.name}
                                            avatar={project.imgUrl}
                                            />
                                        } 
                                        className="animate flex flex-col justify-center items-center">
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
                                            </div>
                                        </div>
                                    </FollowerPointerCard>
                                </a>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}



const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 h-6 items-center">
    <img
      src={avatar}
      alt="thumbnail"
      className="rounded-full w-5 h-5 border-2 border-white object-contain"
    />
    <p className="ml-24" style={{ textTransform: "capitalize", letterSpacing: "1px" }}>github/{title}</p>
  </div>
);
  