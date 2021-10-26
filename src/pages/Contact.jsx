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
                    <h2> ADD CONTACT FORM and SOCIAL MEDIA LINKS </h2>   
                    <img src="../me.jpg" alt="" className="category-img"/>
                </div>

            </main>
       </div>
       )
}

export default Contact