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
                    <br />
                    <br />
                    <h1>Marshawn Davidson</h1>
                    <h2>Software Engineer | Front End Developer</h2> 
                    {/* <img src="../9YjtagPA.jpg" alt="" className="home-img"/> */}
                </div>
            </main>

        
        </div>
    )
}

export default Home;