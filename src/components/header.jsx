import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react';
import './header.css';

export const Header = () => {  

  const [sidebar , setSidebar] = useState(false) ;
  const showSidebar = () => setSidebar(!sidebar) ;
  
    return(
      <div>
              {/* Main Header */}
        <div className="header flex-div">   
            <div className="nav-left flex-div">
                <img src="https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png" className="menuIcon menu-bars" onClick={showSidebar}/>
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
              <p className='font'>Log/Sign Up</p>
            </div>         
        </div>
         
              {/* Sidebar */}
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle nav-text'>
            <BiUserCircle size={26}/> <span>Login/Sign Up</span> <AiOutlineCloseCircle size={26} onClick={showSidebar}/> 
            </li>
            <li className='nav-text'style={{color: "red"}}>Home</li>
            <li className='nav-text'>Radio</li>
            <li className='nav-text'>Podcast</li>
            <li className='nav-text'>My Music</li>
            <li className='nav-text'>India's Music</li>
            <li className='nav-text'>Language</li>
          <hr/>
            <li className='nav-text nav-text-heading'>Go Premium</li>
            <li className='nav-text'>Go Ad-Free</li>
            <li className='nav-text'>Get Gaana Plus</li>
          <hr/>
            <li className='nav-text nav-text-heading'>Go Premium</li>
            <li className='nav-text'>Trending Songs</li>
            <li className='nav-text'>New Songs</li>
            <li className='nav-text'>Old Songs</li>
            <li className='nav-text'>Albums</li>
         </ul>
        </nav>
           
      </div>
    )
}
