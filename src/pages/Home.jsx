import Sidebar from "../components/Sidebar";

function Home() {
    return (
        <div className="main-page">
            <Sidebar />
            <main className="category-info">
                <div className="category-detail">
                    <h1>Marshawn Davidson</h1>
                    <h2>Software Engineer | Front End Developer</h2> 
                    <img src="../9YjtagPA.jpg" alt="" className="category-img"/>
                </div>
            </main>

        
        </div>
    )
}

export default Home;