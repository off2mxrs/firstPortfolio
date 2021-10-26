import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope, } from "react-icons/fa"

function Header() {
   return (
       <header>
           <h1>
                {/* <Link className="header-title" to="/">MARS</Link> */}
            </h1>
            <div className="icons">
            <h2 className="mars">MARS |</h2>
                 <a className="social-links" href="https://github.com/off2mxrs"  target="_blank"><FaGithub /></a>
                 <a className="social-links"  href="https://www.linkedin.com/in/marshawndavidson/" target="_blank"> <FaLinkedin /></a>
                <a className="social-links"  href="mailto:marshawndavidson.ail@gmail.com"> <FaEnvelope/></a>
            </div>              
       </header>
   ) 
}

export default Header;