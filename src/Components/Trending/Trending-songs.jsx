import { type } from "@testing-library/user-event/dist/type"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import './Trending.css'


export const Trending=()=>{
const [trendingdata,setTrendingdata]=useState([])    
var data=useSelector(store=>store.songs)
   
      
  var arr=data.filter((elem)=>{return elem.type=="Trending"})
   
    

 
    return(
        <div>
           
            <div className="trending_headers">
                <div className="track">Track</div>
                <div>Artists</div>
                <div>Duration</div>
            </div>
           
            <div className="trending_Container">
            <hr/>
            {arr.map((elem)=>{
                return(
                   <>
                   <div className="tending_single">
                         <div className="img_div">
                               <div>
                                   <Link to={`/trending/${elem.id}`}>
                                   <img className="mainimg" src={elem.cover_image}/>
                                   </Link>
                               </div>
                                <div>
                                      <Link to={`/trending/${elem.id}`}>
                                       <p className="mainhead">{elem.song}</p> 
                                      </Link>
                                  </div>
                         </div>
                         <div className="artist"><p>{elem.artists}</p></div>
                         <div className="duration">{elem.duration}</div>
                    </div>
                    <hr/>
                   </>
                )
            })}
            </div>
        </div>
    )
        
    
}