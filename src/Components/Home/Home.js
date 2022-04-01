import { useEffect } from "react"
import { useDispatch } from "react-redux"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



export const Home=()=>{
    const dispatch=useDispatch()   
    useEffect(()=>{
        fetch("http://localhost:3000/songs").then(Response=>Response.json()).then(data=>dispatch({type:"songs",payload:data}))
    },[])
    

var data=useSelector(store=>store.songs)  
var newarr=data.filter((elem)=>{return elem.type=="new"})
var oldarray=data.filter((elem)=>{return elem.type=="old"})
var trendingarr=data.filter((elem)=>{return elem.type=="Trending"})
var albumarr=data.filter((elem)=>{return elem.type=="album"})

function SampleNextArrow(props) {

    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }
 const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

return (
   <div className="slider_continer">

    <div className="move">
     <div className="trending_headding">Trending Songs</div>
      <div>
          <div>      
             <Slider {...settings} >
              {trendingarr.map((elem)=>{return <div><Link to="/trending"><img className="sliderimg" src={elem.cover_image} /></Link></div>},[])}
              </Slider>
            </div>
      </div>
     </div>



     <div className="move">
     <div className="trending_headding">New Songs</div>
      <div>
          <div>      
             <Slider {...settings} >
              {newarr.map((elem)=>{return <div><Link to="/new"><img className="sliderimg" src={elem.cover_image} /></Link></div>},[])}
              </Slider>
            </div>
      </div>
     </div>

     <div className="move">
     <div className="trending_headding">Album Songs</div>
      <div>
          <div>      
             <Slider {...settings} >
              {albumarr.map((elem)=>{return <div><Link to="/new"><img className="sliderimg" src={elem.cover_image} /></Link></div>},[])}
              </Slider>
            </div>
      </div>
     </div>
  
     <div className="move">
     <div className="trending_headding">Old Songs</div>
      <div>
          <div>      
             <Slider {...settings} >
              {oldarray.map((elem)=>{return <div><Link to="/new"><img className="sliderimg" src={elem.cover_image} /></Link></div>},[])}
              </Slider>
            </div>
      </div>
     </div>



   </div>
)

} 