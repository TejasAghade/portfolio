import './css/intro.css'
export default function Introduction() {
  return (
    <>
      <div id='intro' className='intro-container'>
        <div className="sections">
          <div className="texts">
            <div className="heading">
              <h2 className='intro' >Hi, i'am <span>Tejas</span></h2>
              <h1 className='position'>Full-Stack Developer</h1>
            </div>
            <div className="desc">
              <p className='exp'>2+ years of experience in</p>
              <p>Web and Mobile app development</p>
            </div>
          </div>
          <div className="right">
            <div className="img-wrapper">
              {/* <img src="./../../src/assets/tejas7.png" alt="" /> */}
              <div className="photo-background"></div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
