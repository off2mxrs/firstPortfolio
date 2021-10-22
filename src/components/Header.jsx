import { Link } from 'react-router-dom'

function Header() {
   return (
       <header>
           <h1>
                <Link className="header-title" to="/">MARS</Link>
            </h1>

            <h2>Front-End Engineer</h2>
           <ul className="navList">
               <li>
                   <Link className="navLink" to ="/">Projects</Link>
               </li>
               <li>
                   <Link className="navLink" to ="/about">Skills</Link>
               </li>
               <li>
                   <Link className="navLink" to ="/contact">Contact</Link>
               </li>
           </ul>
       </header>
   ) 
}

export default Header;