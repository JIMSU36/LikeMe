import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollTopLoad';

import MainPage from './pages/MainPage';
import LikeMe from './pages/LikeMe';
import Program from './pages/Program';
import Academy from './pages/Academy';
import Studio from './pages/Studio';
import AddNewPost from './pages/AddNewPost';
import ProgramDetail from './pages/ProgramDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          {/* {userRoutes.map((route)=>{
            return <Route path={route.path} element={route.component()} key={route.path}/>
          })} */}
          <Route path="/" element={<MainPage/>}/>
          <Route path="/LikeMe" element={<LikeMe/>}/>
          <Route path="/Program" element={<Program/>}/>
          <Route path="/Academy" element={<Academy/>}/>
          <Route path="/Studio" element={<Studio/>}/>
          <Route path=":page/AddNewPost" element={<AddNewPost/>}/>
          <Route path="/Program/:programName" element={<ProgramDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
