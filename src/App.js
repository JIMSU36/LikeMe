import './App.css';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
          
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage/>}></Route>
             
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
