import './css/navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="icon">
                    <h2>Tejas Aghade</h2>
                </div>
                <div className="navlinks">
                    <ul className='link-items'>
                        <li><a href='#intro' >Home</a></li>
                        {/* <li><a>Services</a></li> */}
                        <li><a>Skills</a></li>
                        <li><a>Experience</a></li>
                    </ul>
                </div>
                <button className='button'>Contact Me</button>
            </nav>
        </>
    )
}
