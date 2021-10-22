import "../styles/portfolio.scss"

function About() {
    return (
        <div className="main-page">
             <aside className="sidebar">
                <li className="sidebar-card">RESUME</li>
                <h3 className='vertical'>
                    SKILLS
                </h3>
            </aside>
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

export default About;