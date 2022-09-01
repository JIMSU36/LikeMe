import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {userRoutes} from './routes/allRoutes';
import LikeMe from './pages/LikeMe';
import Program from './pages/Program';
import Academy from './pages/Academy';
import Studio from './pages/Studio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* {userRoutes.map((route)=>{
            return <Route path={route.path} element={route.component()} key={route.path}/>
          })} */}
          <Route path="/" element={<MainPage/>}/>
          <Route path="/LikeMe" element={<LikeMe/>}/>
          <Route path="/Program" element={<Program/>}/>
          <Route path="/Academy" element={<Academy/>}/>
          <Route path="/Studio" element={<Studio/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
