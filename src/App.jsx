import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Header} from './Components/Header/Header';
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Components/Home/Home';
import { Trending } from './Components/Trending/Trending-songs';
import {Trendingaudio} from './Components/Trending/Trendingaudio'
import { Oldsongs } from './Components/Oldsongs/Oldsongs';
import { Oldaudio } from './Components/Oldsongs/Old_audio';
import { Newsongs } from './Components/Newsongs/Newsongs';
import { Newsongsaudio } from './Components/Newsongs/Newsongsaudio';
import { Albumsongs } from './Components/Album/Album';
import { Albumsongsaudio } from './Components/Album/Albumaudio';



function App() {
  return (
    <div className="App">
    <Header/>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/> 
      <Route path='/Trending' element={ <Trending/>} />
      <Route path='/trending/:id' element={<Trendingaudio/>}/>
      <Route path='/old' element={ <Oldsongs/>} />
      <Route path='/old/:id' element={<Oldaudio/>}/>
      <Route path='/new' element={<Newsongs/>}/>
      <Route path='/new/:id' element={<Newsongsaudio/>}/>
      <Route path='/album' element={<Albumsongs/>}/>
      <Route path='/album/:id' element={<Albumsongsaudio/>}/>
    </Routes>
    </div>
  );
}

export default App;
