import Sidebar from "../components/Sidebar"
import "../styles/main.scss"

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
                        <p className="icons">SOCIAL MEDIA</p>
                    </div> 

                    <form>
                        Contact
                        <br/>
                        <label className="#"></label>
                        <input type="text" className="#"></input>
                        <br/>
                        <label className="#"></label>
                        <input type="text" className="#"></input>
                        <br/>
                        <label className="#"></label>
                        <input type="text" className="#"></input>
                        <br/>
                        <label className="#"></label>
                        <input type="text" className="#"></input>
                        <br/>
                        <input type="submit"></input>
                    </form> 
                </div>

            </main>
       </div>
       )
}

export default Contact