import "../styles/main.scss"
import "../styles/video.scss"
import Video from "../media/291957_Record_Player_Record_Stylus_Needle_Record_by_Janis_Saukums_Artgrid-HD_H264-HD.mp4"

function Portfolio() {
    return (
        <div>
            <section className="top">
                <h1>Hi Im Mars</h1>
                <video autoPlay muted loop>
                    <source src={Video} type="video/mp4" />
                </video>
            </section>
            <h2>Welcome</h2>
        </div>
    )
}

export default Portfolio;