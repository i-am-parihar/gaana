import { type } from "@testing-library/user-event/dist/type"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const Trending=()=>{
const dispatch=useDispatch()    
// const [data,setData]=useState([])

useEffect(()=>{
    fetch("http://localhost:3000/songs").then(Response=>Response.json()).then(data=>dispatch({type:"songs",payload:data}))
},[])

const data=useSelector(store=>store.songs)
    return(
        <div>
           
            <div className="trending_headers">
                <div className="track">Track</div>
                <div>Artists</div>
                <div>Duration</div>
            </div>
           
            <div className="trending_Container">
            <hr/>
            {data.map((elem)=>{
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