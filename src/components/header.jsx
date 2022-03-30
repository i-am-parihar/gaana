import '../App.css';
import { BiUserCircle } from 'react-icons/bi';

export const Header = () => {
   
  var sidebar = document.querySelector(".sidebar") ;
  function close() {
    sidebar.classList.toggle("small-sidebar") ;
  }

    return(
      <div>
        <nav className="header flex-div">
            <div className="nav-left flex-div">
                <img src="https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png" className="menuIcon" onClick={close}/>
                <img src="https://dog55574plkkx.cloudfront.net/storelogo/web/gaana.png" className="gaanaIcon"/>
            </div>

            <div className="nav-middle flex-div">  
                <div className="search-box flex-div">  
                  <img src="https://img.icons8.com/fluency-systems-regular/2x/search.png" id="searchButton" />
                  <input type="text" placeholder="Search Artists, Songs, Albums" id="video" />
                </div>

                <div className="flex-div">
                  <button className='redBtn'>Go Ad Free</button>
                  <button className='redBtn btn2'>Get Gaana Plus</button>
                </div>
            </div>

            <div className='nav-right flex-div'>
              <img src='https://w7.pngwing.com/pngs/147/905/png-transparent-white-outline-of-the-moon-white-text-monochrome-thumbnail.png' className='theme'/>
              <p className='logIn'>Log/Sign Up</p>
            </div>         
        </nav>
      
              
        <div className="sidebar">
           <div className="shortcut-links">
               <div className='flex-div'>
               <div className='loginIcon'><BiUserCircle size={30}/></div>
               <p>Login / Sign Up</p>
               </div>
               <p>Home</p>
               <p>Radio</p>
               <p>Podcast</p>
               <p>My Music</p>
               <p>India's Music</p>
               <hr/>
               <p>Go Premium</p>
               <p>Go Ad-Free</p>
               <p>Get Gaana Plus</p>

          </div>
       </div>
           
     </div>

    )
}
