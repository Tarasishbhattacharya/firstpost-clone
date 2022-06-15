import "./Navbar.css"
import { FaBars,FaFacebookSquare,FaInstagram,FaTwitterSquare,FaYoutubeSquare,FaSearch} from "react-icons/fa";

export const Navbar=()=>{
    return (
        <div className="nav_cont">
         <div className="navitem">
         <div>
               <FaBars style={{color: 'white', fontSize: '30px', width:'38px' ,padding:'5px 5px  5px 5px',height:'30px'}}/>
           </div>
           <div className="logo">
               <img src="https://www.firstpost.com/static/images/fp-desk-logo.png" alt="logo"/>
           </div>
           <div className="social_icon">
            <FaFacebookSquare style={{backgroundColor: 'black',color:'#4968ab' ,fontSize: '20px'}}/><FaInstagram style={{backgroundColor: 'black',color:'#e48242',fontSize:'20px'}}/><FaTwitterSquare style={{backgroundColor: 'black',color:'#01b0ef',fontSize:'20px'}}/><FaYoutubeSquare style={{backgroundColor: 'black',color:'red',fontSize:'20px'}}/>
           </div>
           <div className="sidediv">|</div>
           <div><FaSearch style={{color: 'white',fontSize: '20px',marginLeft:'40px'}}/></div>
         </div>
         <div className="second_navcont">
             <div className="second_navitem">
               <div className="newsitem">
                   <p>Health</p>
               </div>
               <div  className="newsitem">
                   <p className="single_newsitem">India</p>
               </div>
               <div  className="newsitem">
                   <p className="single_newsitem">World</p>
               </div>
               <div  className="newsitem">
                   <p className="single_newsitem">Politics</p>
               </div>
               <div  className="newsitem">
                   <p className="single_newsitem">Auto</p>
               </div>
               <div  className="newsitem">
                   <p className="single_newsitem">Opinion</p>
               </div>
               <div  className="newsitem">
                   <p className="single_newsitem">Sports</p>
               </div>
               <div  className="newsitem">
                   <p className="single_newsitem">Cricket</p>
               </div>
               <div  className="newsitem entertainment">
                   <p className="single_newsitem">Entertainment</p>
               </div>
               <div className="second_navitem_sidediv">|</div>
               <div className="second_navitem_img">
               <button>crypto</button>
               <img src="https://www.firstpost.com/static/images/netrasuraksha_L2_103x25px.jpg" alt="img"/>
           </div>
        </div>
           
         </div>
        </div>
    )
}