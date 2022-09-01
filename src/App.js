import './App.css';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {userRoutes} from './routes/allRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {userRoutes.map((route)=>{
            return <Route path={route.path} element={route.component()} key={route.path}/>
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
