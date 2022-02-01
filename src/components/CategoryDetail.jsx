import Fade from "react-reveal/Fade"

function CategoryDetail(props) {
  return (
    <div className="category-detail">
        <h2 className="page-title">Projects</h2> 

        <div className="project" >
      <section className="gallary2">
          <h3>Ravenous</h3>
          <a href="https://ravenous-mars.netlify.app/" target="_blank" className="project-link">
            <Fade right>
            <img src={props.category.project[0].media[3]} alt="" className="project-img"/>
            </Fade>
          </a>
      </section>
        <section className="info2">
          <h3>Ravenous</h3>
          <br/>
          <p>Yelp-Like Clone</p>
          <br/>
          <p>Created with React. <a href="https://github.com/off2mxrs/ravenous" target="_blank" className="repo" >Explore code here.</a></p>
        </section>
      </div>

      <div className="project" >
      <section className="gallary">
          <h3>Label</h3>
          <a href="https://labelproject.herokuapp.com/" target="_blank" className="project-link">
           <Fade left>
            <img src={props.category.project[0].media[0]} alt="" className="project-img"/>
           </Fade>
          </a>
        </section>
        <section className="info">
          <h3>Label</h3>
          <br/>
          <p>Music website to showcase artists.</p>
          <br/>
          <p>Created with Express and EJS. <a href="https://github.com/off2mxrs/label" target="_blank" className="repo" >Explore code here.</a> </p>
        </section>
      </div>

      <div className="project" >
      <section className="gallary2">
          <h3>Wayfarer</h3>
          <a href="https://wayfarer-sette-digital.herokuapp.com" target="_blank" className="project-link">
            <Fade right>
            <img src={props.category.project[0].media[1]} alt="" className="project-img"/>
            </Fade>
          </a>
      </section>
        <section className="info2">
          <h3>Wayfarer</h3>
          <br/>
          <p>Travel website</p>
          <br/>
          <p>Created with React. <a href="https://github.com/DataPlant/WayfarerReact" target="_blank" className="repo" >Explore code here.</a></p>
        </section>
      </div>

      <div className="project" >
      <section className="gallary">
          <h3>blvd</h3>
          <a href="https://sei706-blvd.herokuapp.com/" target="_blank" className="project-link">
          <Fade left>
            <img src={props.category.project[0].media[2]} alt="" className="project-img"/>
          </Fade>  
          </a>  
        </section>
        <section className="info">
          <h3>blvd</h3>
          <br/>
          <p>Social media website.</p>
          <br/>
          <p>Created with Express and EJS. <a href="https://github.com/off2mxrs/blvd" target="_blank" className="repo" >Explore code here.</a></p>
        </section>
      </div>

      
     
    </div>
  );
}

export default CategoryDetail;
