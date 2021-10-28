function CategoryDetail(props) {
  return (
    <div className="category-detail">
        <h2 className="page-title">Projects</h2> 
     

      <div className="project" >
      <section className="gallary">
          <h3>Label</h3>
          <a href="https://github.com/off2mxrs/label" target="_blank">
           <img src={props.category.project[0].media[0]} alt="" className="project-img"/>
          </a>
        </section>
        <section className="info">
          <h3>Label</h3>
          <br/>
          <p>Music website to showcase artists.</p>
          <br/>
          <p>Created with EXPRESS and EJS</p>
        </section>
      </div>

      <div className="project" >
      <section className="gallary2">
          <h3>Wayfarer</h3>
          <a href="https://wayfarer-sette-digital.herokuapp.com" target="_blank">
            <img src={props.category.project[0].media[1]} alt="" className="project-img"/>
          </a>
      </section>
        <section className="info2">
          <h3>Wayfarer</h3>
          <br/>
          <p>Travel website</p>
          <br/>
          <p>Created with REACT.</p>
        </section>
      </div>

      <div className="project" >
      <section className="gallary">
          <h3>blvd</h3>
          <a href="https://sei706-blvd.herokuapp.com/" target="_blank">
            <img src={props.category.project[0].media[2]} alt="" className="project-img"/>
          </a>  
        </section>
        <section className="info">
          <h3>blvd</h3>
          <br/>
          <p>Social media website.</p>
          <br/>
          <p>Created with Express and EJS.</p>
        </section>
      </div>

      
     
    </div>
  );
}

export default CategoryDetail;
