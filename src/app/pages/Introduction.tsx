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
      link:"https://www.instagram.com/tejasaghade/",
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
              <p className='exp'>1.6+ years of experience in</p>
              <p>Web and Mobile app development</p>
            </div>
            <div className="socials ml-4 mt-10">
              <div className="icons w-48 flex flex-row justify-between relative z-50">
                
                {
                  socialMedia.map((s, i)=>(
                    <FollowerPointerCard key={i}
                      title={
                        <TitleComponent 
                          title={s.text}
                          avatar={t}
                        />
                      } className="png">

                      <div className="png">
                        <a href={s.link} className='inverse' target='_blank'><img src={s.img} alt="github" /></a>
                      </div>
                    </FollowerPointerCard>
                  ))
                }
              </div>
            </div>
          </div>
          {/* <div className="right">
            <div className="img-wrapper">
              <div className="img">
                <img className='w-48' src="./../../src/assets/tejas7.png" alt="" />
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

