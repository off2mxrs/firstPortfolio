function CategoryDetail(props) {
  return (
    <div className="category-detail">
        <h2 className="page-title">Projects</h2> 
     

      <div className="project" >
        <section className="info">
          <h3>Label</h3>
          <br/>
          <p>Music website to showcase artists.</p>
          <br/>
          <p>Created with EXPRESS and EJS</p>
        </section>
        <section className="gallary">
          <img src={props.category.project[0].img} alt="" className="project-img"/>
        </section>
      </div>

      <div className="project" >
        <section className="info2">
          <h3>Wayfarer</h3>
          <br/>
          <p>Travel website</p>
          <br/>
          <p>Created with REACT.</p>
        </section>
        <section className="gallary2">
          <img src={props.category.project[0].img} alt="" className="project-img"/>
        </section>
      </div>

      <div className="project" >
        <section className="info">
          <h3>blvd</h3>
          <br/>
          <p>Social media website.</p>
          <br/>
          <p>Created with Express and EJS.</p>
        </section>
        <section className="gallary">
          <img src={props.category.project[0].img} alt="" className="project-img"/>
        </section>
      </div>

      
     
    </div>
  );
}

export default CategoryDetail;
