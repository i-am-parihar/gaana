import { useEffect } from "react"
import { useDispatch } from "react-redux"

export const Home=()=>{
    const dispatch=useDispatch()   
    useEffect(()=>{
        fetch("http://localhost:3000/songs").then(Response=>Response.json()).then(data=>dispatch({type:"songs",payload:data}))
    },[])

return (
    <h1>This is home page</h1>
)

} 