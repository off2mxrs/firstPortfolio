function CategoryDetail(props) {
  return (
    <div className="category-detail">
       <section >
        <h2>{props.category.categoryName}</h2> 
       </section>

      <div >
        <p>{props.category.categoryDescription}</p>
      </div>

      <img src={props.category.project[0].media[0]} alt="" className="category-img"/>
      <img src={props.category.project[0].img} alt="" className="home-img"/>
      
     
    </div>
  );
}

export default CategoryDetail;
