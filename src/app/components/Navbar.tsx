import './css/navbar.css'

import burger from '../../assets/icons/hamburger.png';

export default function Navbar() {
    return (
        <>
            <nav className="navbar flex justify-between items-center">
                <div className="icon flex flex-row items-center">
                    <h2>Tejas Aghade</h2>
                </div>
                <div className="navlinks">
                    <ul className='link-items flex justify-between'>
                        <li><a href='#intro' >Home</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#experience'>Experience</a></li>
                        <li><a href='#projects' >Projects</a></li>
                    </ul>
                </div>
                <div className="personal">
                    <button className='button'>Contact</button>
                </div>
                <div className="hamburger">
                    <div className="burger">
                        <img src={burger} alt="icon" />
                    </div>
                </div>
            </nav>
        </>
    )
}
