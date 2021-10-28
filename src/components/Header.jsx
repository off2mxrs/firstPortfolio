import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope, FaGoogleDrive, FaDownload } from "react-icons/fa"
import Fade from "react-reveal/Fade"
import Pulse from "react-reveal/Pulse"

function Header() {
   return (
       <header>
           <Pulse>
          <h2 className="mars">MARS</h2>
          </Pulse>
          <Fade right cascade> 
              <div className="icons">
                 <a className="social-links" href="https://github.com/off2mxrs"  target="_blank"><FaGithub /></a>
                 <a className="social-links"  href="https://www.linkedin.com/in/marshawndavidson/" target="_blank"> <FaLinkedin /></a>
                 <a className="social-links"  href="mailto:marshawndavidson.ail@gmail.com"> <FaEnvelope/></a>
                 <a className="social-links"  href="https://docs.google.com/document/d/1jdC5pD9IzlW0GQboGm1kzvzpbvqsKelqgFuhUy1bRu0/edit?usp=sharing" target="_blank"> <FaGoogleDrive/></a>
                 <a className="social-links"  href="../resume.pdf" download="Resume_Marshawn_Davidson"> <FaDownload/></a>
              </div>              
          </Fade>
       </header>
   ) 
}

export default Header;