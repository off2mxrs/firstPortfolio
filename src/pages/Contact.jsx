import Sidebar from "../components/Sidebar"
import "../styles/main.scss"
import { FaGithub, FaLinkedin, FaEnvelope, } from "react-icons/fa"
import Fade from "react-reveal/Fade"

function Contact() {
    return (
        <div className="main-page">
             <div className="side">
                <Sidebar />
                <h3 className='vertical'>
                 <Fade top cascade>
                 CONTACT
                </Fade>
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
                    <div className="contact-box">
                        <form action="https://formsubmit.co/marshawndavidson.ail@gmail.com" method="POST">
                            Contact Me!
                            <br/>
                            <input type="text" className="input-field" name="name" placeholder="Your Name" required></input>
                            <br/>
                            <input type="hidden" name="_captcha" value="false"></input>
                            <input type="email" className="input-field" name="email" placeholder="Your Email Address" required></input>
                            {/* <input type="hidden" name="_next" value="https://marshawndavidson.dev/thanks"></input> */}
                            <br/>
                            <input type="text" className="input-field" name="_subject" placeholder="Subject"></input>
                            <br />
                            <textarea type="text" className="input-field textarea-field" name="message" placeholder="Message" required></textarea>
                            <input type="submit" className="submit"></input>
                        </form> 
                    </div>
                </div>

            </main>
       </div>
       )
}

export default Contact