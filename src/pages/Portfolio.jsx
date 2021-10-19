import "../styles/main.scss"
import "../styles/video.scss"
import Video2 from "../media/291957_Record_Player_Record_Stylus_Needle_Record_by_Janis_Saukums_Artgrid-HD_H264-HD.mp4"
import Video from "../media/childish.mp4"
import Video3 from "../media/mixer.mp4"
function Portfolio() {
    return (
        <div>
            <div className="top">
                <h1>Hi Im Mars</h1>
                {/* <video autoPlay muted loop>
                    <source src={Video} type="video/mp4" />
                </video>          */}
            </div>

{/* ////////////////////// PROJECTS /////////////////////             */}
                <section className="glass">
                 <h2>Projects</h2>
            <div id="project-cards">
                <div className="project-card">
                    <div className="front">
                        <span className="project-name">Wayfarer</span>
                    </div>
                    <div className="back">
                     <div className="description">
                        Lorem ipsum dolor sit amet, consectetur
                        <div >
                        <img className="photo" src="/png/me.png"></img>
                        </div>
                     </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="front">
                        <span className="project-name">Wayfarer</span>
                    </div>
                    <div className="back">
                     <div className="description">
                        Lorem ipsum dolor sit amet, consectetur
                        <div >
                        <img className="photo" src="/png/me.png"></img>
                        </div>
                     </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="front">
                        <span className="project-name">Wayfarer</span>
                    </div>
                    <div className="back">
                     <div className="description">
                        Lorem ipsum dolor sit amet, consectetur
                        <div >
                        <img className="photo" src="/png/me.png"></img>
                        </div>
                     </div>
                    </div>
                </div>
            </div>
            </section>

 {/* //////////////////// SKILLS //////////////////            */}
            <section className="glass">
            <div className="inner">
                <div className="skill-header">
                    <h2>My Skills</h2> 
                </div>
                <section className="container">
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/javascript.png"></img>
                            </div>
                            <h3>JavaScript</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/css.png"></img>
                            </div>
                            <h3>CSS 3</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/sass.png"></img>
                            </div>
                            <h3>SASS</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/html-5.png"></img>
                            </div>
                            <h3>HTML 5</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/python.png"></img>
                            </div>
                            <h3>Python</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/react.png"></img>
                            </div>
                            <h3>React</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/nodejs.png"></img>
                            </div>
                            <h3>Node Js</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/github.png"></img>
                            </div>
                            <h3>Github</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>

                </section>
    
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
            </section>
        </div>
    )
}

export default Portfolio;