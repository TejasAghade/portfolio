import './css/intro.css'

import lkdin from './../../assets/icons/linkedin.png';
import gmail from './../../assets/icons/gmail.png';
import insta from './../../assets/icons/insta2.png';
import twitter from './../../assets/icons/twitter.png';
import github from './../../assets/icons/github.png';

export default function Introduction() {
  return (
    <>
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
              <div className="icons w-48 flex flex-row justify-between">
                <div className="png">
                  <a href="https://www.linkedin.com/in/tejas-aghade-3ab752221/?originalSubdomain=in" target='_blank'><img src={lkdin} alt="LinkedIn" /></a>
                </div>
                <div className="png">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aghadetejas1@gmail.com" target='_blank'><img src={gmail} alt="Gmail" /></a>
                </div>
                <div className="png">
                  <a href="https://github.com/TejasAghade" className='inverse' target='_blank'><img src={github} alt="github" /></a>
                </div>
                <div className="png">
                  <a href="#"><img src={twitter} alt="Twitter" /></a>
                </div>
                <div className="png">
                  <a href="https://www.instagram.com/tejasaghade/" target='_blank'><img src={insta} alt="Instagram" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="img-wrapper">
              <div className="img">
                {/* <img className='w-48' src="./../../src/assets/tejas7.png" alt="" /> */}
              </div>
              <div className="photo-background"></div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
