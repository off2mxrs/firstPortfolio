import { Link } from 'react-router-dom'


function Sidebar(props) {
  function handleCategoryClick(idx) {
    // console.log('Category Clicked');
    // console.log('Index =>', idx);
    props.updateCategoryIdx(idx)
  }
  
  // const sidebarJsx = props.categoryNames.map((name, idx) => {
  //   return (
  //     <li 
  //     className="sidebar-card" 
  //     key={idx} 
  //     onClick={() => handleCategoryClick(idx)}
  //     >
  //       {name}
  //     </li>
  //   )
  
  // })
  return (
      <div>
        <aside className="sidebar">
         {/* {sidebarJsx} */}
         <ul>
         
          <li><Link className="sidebar-card" to ="/">Home</Link></li>
          <li><Link className="sidebar-card" to ="/projects">Projects</Link></li>
          <li><Link className="sidebar-card" to ="/skills">Skills</Link></li>
          <li><Link className="sidebar-card" to ="/contact">Contact</Link></li>
         
         </ul>
       
        </aside>

      </div>
    );
  }
  
  export default Sidebar;
  
