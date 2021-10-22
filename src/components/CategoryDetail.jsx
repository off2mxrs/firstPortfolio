function CategoryDetail(props) {
  return (
    <div className="category-detail">
       <section >
        <h2>{props.category.categoryName}</h2> 
       </section>

      <div >
        <h2>{props.category.projects[0].projectName}</h2>
        <p>{props.category.categoryDescription}</p>
      </div>

      <img src={props.category.projects[0].img} alt="" className="category-img"/>
      <img src={props.category.projects[0].img} alt="" className="category-img"/>
      <img src={props.category.projects[0].img} alt="" className="category-img"/>
     
    </div>
  );
}

export default CategoryDetail;
