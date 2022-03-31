import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Trending } from './Components/Trending/Trending-songs';
import {Audio} from './Components/Trending/Audio'
import './Components/Trending/Trending.css'
import {Header} from './Components/Header/Header'
import './Components/Header/Header.css'

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={ <Trending/>} />
      <Route path='/trending/:id' element={<Audio/>}/>
    </Routes>
        
    </div>
  );
}

export default App;
