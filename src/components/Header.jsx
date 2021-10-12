import { Link } from 'react-router-dom'

function Header() {
   return (
       <header>
           <h1>MARS</h1>
           <ul>
               <li>
                   <Link to ="/">Portfolio</Link>
               </li>
               <li>
                   <Link to ="/about">About</Link>
               </li>
               <li>
                   <Link to ="/contact">Contact</Link>
               </li>
           </ul>
       </header>
   ) 
}

export default Header;