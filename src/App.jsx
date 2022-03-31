import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Trending } from './Components/Trending/Trending-songs';
import {Audio} from './Components/Trending/Audio'
import './Components/Trending/Trending.css'
import {Header} from './Components/Header/Header'
import './Components/Header/Header.css'
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Components/Home/Home';
import {Old_songs} from "./Components/Oldsongs/Old_songs"
import {old_audio} from "./Components/Oldsongs/Old_audio"

function App() {
  return (
    <div className="App">
    <Header/>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/> 
      <Route path='/Trending' element={ <Trending/>} />
      <Route path='/trending/:id' element={<Audio/>}/>
      <Route path='/old' element={<Old_songs/>}/>
      <Route path='/old/:id' element={<old_audio/>}/>
    </Routes>
        
    </div>
  );
}

export default App;
