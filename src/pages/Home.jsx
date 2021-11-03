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
                    {/* <img className="home-fade" src="../wwydblank.png"/> */}
                 <Fade bottom cascade>   
                  <div className="static-txt">Marshawn <br/> Davidson </div>
                  <div className="wrapper">
                    <ul className="dynamic-txt">
                        <li><span>Software Engineer</span></li>
                        <li><span>FrontEnd Specialist</span></li>
                        <li><span>Curator</span></li>
                        <li><span>Music Artist</span></li>
                    </ul>
                   </div>
                   </Fade>
                </div>
            </main>

        
        </div>
    )
}

export default Home;