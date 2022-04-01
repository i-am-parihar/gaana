import { type } from "@testing-library/user-event/dist/type"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import './Album.css'

export const Albumsongs=()=>{
   
var data=useSelector(store=>store.songs)  
 var arr=data.filter((elem)=>{return elem.type=="album"})
    return(
        <div>
            <div className="new_Container">
                   {arr.map((elem)=>{
                   return(
                             <>
                         <div className="New_single">
                         
                               <div>
                                   <Link to={`/album/${elem.id}`}>
                                   <img className="newimg" src={elem.cover_image}/>
                                   </Link>
                               </div>

                                <div>
                                      <Link to={`/album/${elem.id}`}>
                                       <p className="newhead">{elem.song}</p> 
                                      </Link>
                                </div>
                         </div>
                
                   </>
                )
            })}
            </div>
        </div>
    )
        
    
}