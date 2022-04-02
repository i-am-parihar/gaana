import { useEffect } from "react"
import { useDispatch } from "react-redux"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { Movable } from "../Movable/Movable";




export const Home=()=>{
    const dispatch=useDispatch()   
     useEffect(()=>{
          fetch("https://gaana-apiss.herokuapp.com/songs").then(Response=>Response.json()).then(data=>dispatch({type:"songs",payload:data.songs}))
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
        style={{ ...style, display: "block", background: "gray",margin:"0px 38px" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray",margin:"0px 0px 0px 4px"}}
        onClick={onClick}
      />
    );
  }
 const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };

return (
   <div className="slider_continer">
      
    <div>
      <Movable/>
    </div>

    <div className="move" id="movee">
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
     <div className="trending_headding">New Releases</div>
      <div>
          <div>      
             <Slider {...settings} >
              {newarr.map((elem)=>{return <div><Link to="/new"><img className="sliderimg" src={elem.cover_image} /></Link></div>},[])}
              </Slider>
            </div>
      </div>
     </div>

     <div className="move">
     <div className="trending_headding">Top Searched Artists</div>
      <div>
          <div>      
             <Slider {...settings} >
             <div>
          <img className="sliderimg" src="https://a10.gaanacdn.com/gn_pl_img/playlists/koMWQBbqLE/oMWQBaYAbq/size_m_1640593157.webp"/>
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_pl_img/playlists/jBr3gybR1m/Br3gQB4NbR/size_m_1645693602.webp" />
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_pl_img/playlists/zLp36v3rGe/Lp36mQk0Kr/size_m_1644564587.webp" />
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_pl_img/playlists/XYybzrb2gz/ybzzGEQ8b2/size_m_1631887402.webp" />
        </div>

        <div>
          <img className="sliderimg" src="https://a10.gaanacdn.com/gn_pl_img/playlists/ZaP374RWDy/P37oYngR3D/size_m_1641867468.webp" />
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_pl_img/playlists/4Z9bqZoKyQ/9bqqJeOPby/size_m_1645692996.webp" />
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_pl_img/playlists/9En3pqeWXD/n3pkoxO6KX/size_m_1646638517.webp" />
        </div>

        <div>
        <img className="sliderimg" src="https://a10.gaanacdn.com/gn_pl_img/playlists/D0PKLqr3Gl/0PKLjDk6WG/size_m_1618603022.webp" />
        </div>
              </Slider>
            </div>
      </div>
     </div>




     <div className="move">
     <div className="trending_headding">Romance</div>
      <div>
          <div>      
             <Slider {...settings} >
              {albumarr.map((elem)=>{return <div><Link to="/new"><img className="sliderimg" src={elem.cover_image} /></Link></div>},[])}
              </Slider>
            </div>
      </div>
     </div>

     <div className="move">
     <div className="trending_headding">Featured Artists</div>
      <div>
          <div>      
             <Slider {...settings} >
             <div>
          <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/artists/9MAWe7KyJe/MAWe9lBGWy/size_m_1516185303.webp"/>
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/artists/6Zxb2r7b9w/Zxb2xp0w39/size_m.jpg" />
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/artists/ZaP37OR3Dy/ZaP37lBWDy/size_m_1516796833.webp" />
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/artists/10q3ZR1352/0q3Z6Lg135/size_m_1638777310.webp" />
        </div>

        <div>
          <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1638898900.webp" />
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/artists/Rz4W87v3xD/Rz4W8ppWxD/size_m_1638817418.webp" />
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_img/artists/21GWwrR3pk/1GWwYz4DKp/size_m_1567610470.webp" />
        </div>

        <div>
        <img className="rsliderimg" src="https://a10.gaanacdn.com/gn_pl_img/playlists/D0PKLqr3Gl/0PKLjDk6WG/size_m_1618603022.webp" />
        </div>
              </Slider>
            </div>
      </div>
     </div>

     <div className="move" id="lmove">
     <div className="trending_headding">Top Playlists</div>
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