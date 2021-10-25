import Sidebar from "../components/Sidebar";
import "../styles/portfolio.scss"

function Skills() {
    return (
        <div className="main-page">
            <Sidebar />
            <main className="category-info">
                <div className="category-detail">
                    <h2>Marshawn Davidson</h2>
                    <p>Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for creating beautiful websites around your business.</p> 
                    <img src="../me.jpg" alt="" className="category-img"/>
                </div>
                ADD ALL SKILLS HERE AND RESUME DOWNLOAD
            </main>

        
        </div>
    )
}

export default Skills;