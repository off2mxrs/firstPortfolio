import Sidebar from "../components/Sidebar";
import "../styles/portfolio.scss"
import { FaDownload, } from "react-icons/fa"

function Skills() {
    return (
        <div className="main-page">
             <div className="side">
                <Sidebar />
                <h3 className='vertical'>
                    SKILLS
                </h3>
            </div>
            <main className="category-info">
                <div className="category-detail">
                    <h2 className="page-title">Skills</h2>
                    
                    
                
                   <section className="glass">
            <div className="inner">
                {/* 
                    <h3><a href="https://docs.google.com/document/d/1jdC5pD9IzlW0GQboGm1kzvzpbvqsKelqgFuhUy1bRu0/edit?usp=sharing" target="_blank">Resume</a></h3> 
                    <h3><a href="resume.pdf" download="Marshawn Davidson's Resume">Download Resume</a></h3> 
                 */}
                <div className="skill-header">
                <a href="resume.pdf" download="Resume|Marshawn D.">
                    <button type="button" className="resume-btn">
                        <span className="btn-text">Download <br/> Resume</span>
                        <span className="btn-icon"><FaDownload/></span>
                    </button>
                </a>
                </div>    
                <section className="container">
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/javascript.png"></img>
                            </div>
                            <h3>JavaScript</h3>
                        </div>
                        
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/css.png"></img>
                            </div>
                            <h3>CSS 3</h3>
                        </div>
                        
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/sass.png"></img>
                            </div>
                            <h3>SASS</h3>
                        </div>
                        
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/html-5.png"></img>
                            </div>
                            <h3>HTML 5</h3>
                        </div>
                        
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/python.png"></img>
                            </div>
                            <h3>Python</h3>
                        </div>
                        
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/react.png"></img>
                            </div>
                            <h3>React</h3>
                        </div>
                        
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/nodejs.png"></img>
                            </div>
                            <h3>Node Js</h3>
                        </div>
                        
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/github.png"></img>
                            </div>
                            <h3>Github</h3>
                        </div>
                        
                    </div>

                </section>
    
                {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
            </div>
            </section>
            </div> 
            </main>

        
        </div>
    )
}

export default Skills;