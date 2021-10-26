import Sidebar from "../components/Sidebar"
import "../styles/main.scss"
import { FaGithub, FaLinkedin, FaEnvelope, } from "react-icons/fa"

function Contact() {
    return (
        <div className="main-page">
             <div className="side">
                <Sidebar />
                <h3 className='vertical'>
                    CONTACT
                </h3>
            </div>
            <main className="category-info">
                <div className="category-detail"> 
                    <div className="social-media">
                        <img src="../me.jpg" alt="" className="contact-img"/>
                        <div className="contact-icons">
                          <a className="social-links" href="https://github.com/off2mxrs"  target="_blank"><FaGithub /></a>
                          <a className="social-links"  href="https://www.linkedin.com/in/marshawndavidson/" target="_blank"> <FaLinkedin /></a>
                          <a className="social-links"  href="mailto:marshawndavidson.ail@gmail.com"> <FaEnvelope/></a>
                        </div>
                    </div> 

                    <form action="https://formsubmit.co/marshawndavidson.ail@gmail.com" method="POST">
                        Contact
                        <br/>
                        <label for="name">Name</label>
                        <input type="text" name="name" required></input>
                        <br/>
                        <label for="email">Email</label>
                        <input type="email" name="email" required></input>
                        <br/>
                        <input type="submit"></input>
                    </form> 
                </div>

            </main>
       </div>
       )
}

export default Contact