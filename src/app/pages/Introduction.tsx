import './css/intro.css'

import lkdin from './../../assets/icons/linkedin.png';
import gmail from './../../assets/icons/gmail.png';
import insta from './../../assets/icons/insta2.png';
import twitter from './../../assets/icons/twitter.png';
import github from './../../assets/icons/github.png';
import t from '../../assets/tejas.jpeg';
import { FollowerPointerCard } from '../components/ui/following-pointer';
import { BackgroundBeams } from '../components/ui/background';

export default function Introduction() {


  var socialMedia = [
    {
      text:"linkedin/TejasAghade",
      img:lkdin,
      link:"https://www.linkedin.com/in/tejas-aghade-3ab752221/?originalSubdomain=in",
    },
    {
      text:"gmail/tejasaghade",
      img:gmail,
      link:"https://mail.google.com/mail/?view=cm&fs=1&to=aghadetejas1@gmail.com",
    },
    {
      text:"github/TejasAghade",
      img:github,
      link:"https://github.com/TejasAghade",
    },
    {
      text:"instagram/TejasAghade",
      img:insta,
      link:"https://www.instagram.com/tejasaghade/",
    },
    {
      text:"Tejas",
      img:twitter,
      link:"https://twitter.com/tejasaghade",
    },
  ]

  return (
    <>
     <section className='intro-se-wrapper'>
     <div id='intro' className='intro-section'>
        <div className="sections intro-container flex flex-row items-center justify-between">
          <div className="left texts">
            <div className="heading">
              <h2 className='intro' >Hi, i'am <span>Tejas</span></h2>
              <h1 className='position'>Full-Stack Developer</h1>
            </div>
            <div className="desc">
              <p className='exp'>2 years of professional experience in</p>
              <p>Web and Mobile app development</p>
            </div>
            <div className="socials ml-4 mt-5">
              <div className="icons w-64 flex flex-row justify-between relative z-50">
                
                {
                  socialMedia.map((s, i)=>(
                    <a href={s.link} key={i} target='_blank'>
                      <FollowerPointerCard 
                        title={
                          <TitleComponent 
                            title={s.text}
                            avatar={t}
                          />
                        } className="png">

                        <div  className="png inverse h-7 w-7 flex justify-center items-center">
                            <img src={s.img} alt="github" />
                        </div>
                      </FollowerPointerCard>
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
          {/* <div className="right">
            <div className="img-wrapper">
              <div className="img">
                <img className='w-full' src="./../../src/assets/coder.png" alt="" />
              </div>
              <div className="photo-background"></div>
            </div>
          </div> */}
        </div>
      </div>
      <BackgroundBeams />
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
  <div className="flex space-x-2 items-center">
    <img
      src={avatar}
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p style={{textTransform:'capitalize', letterSpacing:'1px'}} >{title}</p>
  </div>
);

