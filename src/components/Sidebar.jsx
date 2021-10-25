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
          <li className="sidebar-card"><Link to ="/">Home</Link></li>
          <li className="sidebar-card"><Link to ="/projects">Projects</Link></li>
          <li className="sidebar-card"><Link to ="/skills">Skills</Link></li>
          <li className="sidebar-card"><Link to ="/contact">Contact</Link></li>
         </ul>
        <h3 className='vertical'>
         PORTFOLIO

        </h3>
        </aside>

      </div>
    );
  }
  
  export default Sidebar;
  
