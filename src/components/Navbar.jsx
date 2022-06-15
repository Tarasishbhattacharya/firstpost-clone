import "./Navbar.css"
import { FaBars} from "react-icons/fa";

export const Navbar=()=>{
    return (
        <div className="nav_cont">
         <div>
               <FaBars style={{color: 'white', fontSize: '20px'}}/>
           </div>
           <div>
               <img src="https://www.firstpost.com/static/images/fp-desk-logo.png" alt="logo"/>
           </div>
        </div>
    )
}