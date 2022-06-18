import "./Footer.css"
import { FaFacebookSquare,FaInstagram,FaTwitterSquare,FaYoutubeSquare} from "react-icons/fa";

export const Footer=()=>{
    return (
        <div className="outer_footer_div">
        <div className="inner_footer_div">
          <div className="footer_logo">
             <img src="https://www.firstpost.com/static/images/fp-logo.png" alt="footer_logo"/> 
             <div className="social_icon">
            <FaFacebookSquare style={{backgroundColor: 'black',color:'#4968ab' ,fontSize: '20px'}}/><FaInstagram style={{backgroundColor: 'black',color:'#e48242',fontSize:'20px'}}/><FaTwitterSquare style={{backgroundColor: 'black',color:'#01b0ef',fontSize:'20px'}}/><FaYoutubeSquare style={{backgroundColor: 'black',color:'red',fontSize:'20px'}}/>
           </div>
          </div>
          <div className="four_division">
          <div className="section border">
              <p>Firstpost</p>
              <ul>
                  <li>About Firstpost</li>
                  <li>Press Release</li>
                  <li>RSS</li>
                  <li>Twitter</li>
                  <li>Facebook</li>
              </ul>
          </div>
            <div className="section border">
            <p>Section</p>
              <ul>
                  <li>Front page</li>
                  <li>Politics</li>
                  <li>Sports</li>
                  <li>India</li>
                  <li>World</li>
                  <li>Business</li>
                  <li>Entertainment news</li>
                  <li>Cricket</li>
                  <li>Tech</li>
                  <li>Health</li>
                  <li>Photos</li>
                  <li>Videos</li>
                  <li>Press Release</li>
                  <li>First culture</li>
                  <li>Long Reads</li>
                  <li>Latest Mobiles</li>
                  <li>Latest Tablets</li>
                  <li>Latest Laptops</li>
                  <li>Facebook</li>
              </ul>
            </div>
            <div className="section border">
            <p>Plus</p>
              <ul>
                  <li>Cricket Live score</li>
                  <li>New Delhi</li>
                  <li>Mumbai</li>
                  <li>IPL 2020</li>
                  <li>coronavirus</li>
              </ul>
            </div>
             <div className="section">
            <p>Tools</p>
              <ul>
                  <li>Rss feeds</li>
              </ul>
              <p>Apps</p>
              <ul>
                  <li>Ios</li>
                  <li>Android</li>
              </ul>
            </div>
       </div>
           <div className="network18">
             <div className="black">Network18 sites &nbsp;&nbsp;&nbsp;&nbsp;<span>&gt;</span></div>
             <div>Money control</div>
             <div>News 18</div>
             <div>CNBC TV18</div>
             <div>One Drive</div>
             <div>Forbes India</div>
             <div>TopperLearning</div>
           </div>
           <div className="copyright">Copyright © 2022.Firstpost- All Rights Reserved.</div>
           <div className="terms">Terms of use|PrivacyCookie |Policy</div>
        </div>
    </div>
    )
}