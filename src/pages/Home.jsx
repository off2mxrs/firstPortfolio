import Sidebar from "../components/Sidebar";
import Fade from "react-reveal/Fade"

function Home() {
    return (
        <div className="main-page">
            <div className="side">
             <Sidebar />
              <h3 className='vertical'>
              <Fade top cascade>
               PORTFOLIO
              </Fade>
             </h3>
            </div>
            
            <main className="category-info">
                <div className="home-background">
                  <div className="wrapper">
                    <div className="static-txt">Marshawn Davidson | </div>
                    <ul className="dynamic-txt">
                        <li><span>Software Engineer</span></li>
                        <li><span>Front-End Specialist</span></li>
                        <li><span>Curator</span></li>
                        <li><span>Music Artist</span></li>
                        <li><span>Dancer</span></li>
                    </ul>
                   </div>
                </div>
            </main>

        
        </div>
    )
}

export default Home;