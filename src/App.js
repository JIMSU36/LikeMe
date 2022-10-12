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
import DetailPost from './pages/DetailPost';
import { ApplicationContextProvider } from './Contexts/ListTabContext';
import { LikeMeTabContextProvider } from './Contexts/LikeMeTabContext';
import { AuthProvider } from './Contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  // 배포 환경에서 console.log, console.warn 지우기
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
    console.warn = function no_console() {};
    console.error = function no_console() {};
  }

  return (
    <div className="App">
      <ApplicationContextProvider>
        <LikeMeTabContextProvider>
          <BrowserRouter>
            <AuthProvider>
              <ScrollToTop/>
              <Routes>
                
                <Route path="/" element={<MainPage/>}/>
                <Route path="/adminLogin" element={<LoginPage/>}/>
                <Route path="/LikeMe" element={<LikeMe/>}/>
                <Route path="/Program" element={<Program/>}/>
                <Route path="/Academy" element={<Academy/>}/>
                <Route path="/Studio" element={<Studio/>}/>
                <Route path=":page/AddNewPost" element={<PrivateRoute component={<AddNewPost/>}/>}/>
                <Route path=":page/EditPost/:title" element={<PrivateRoute component={<AddNewPost/>}/>}/>
                <Route path=":page/:postTitle" element={<DetailPost/>}/>
                <Route path="/Program/:programName" element={<ProgramDetail/>}/>
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </LikeMeTabContextProvider>
      </ApplicationContextProvider>
    </div>
  );
}

export default App;
