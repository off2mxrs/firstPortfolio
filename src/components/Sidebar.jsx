function Sidebar(props) {
  function handleCategoryClick(idx) {
    // console.log('Category Clicked');
    // console.log('Index =>', idx);
    props.updateCategoryIdx(idx)
  }
  
  const sidebarJsx = props.categoryNames.map((name, idx) => {
    return (
      <li 
      className="sidebar-card" 
      key={idx} 
      onClick={() => handleCategoryClick(idx)}
      >
        {name}
      </li>
    )
  
  })
  return (
      <aside className="sidebar">
       {sidebarJsx}
      </aside>
    );
  }
  
  export default Sidebar;
  
