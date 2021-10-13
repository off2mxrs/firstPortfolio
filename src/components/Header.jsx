import { Link } from 'react-router-dom'

function Header() {
   return (
       <header>
           <h1>
                <Link className="header-title" to="/">MARS</Link>
            </h1>
           <ul className="navList">
               <li>
                   <Link className="navLink" to ="/">Portfolio</Link>
               </li>
               <li>
                   <Link className="navLink" to ="/about">About</Link>
               </li>
               <li>
                   <Link className="navLink" to ="/contact">Contact</Link>
               </li>
           </ul>
       </header>
   ) 
}

export default Header;