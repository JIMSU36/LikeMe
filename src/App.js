import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollTopLoad';
import { ApplicationContextProvider } from './Contexts/ListTabContext';
import { LikeMeTabContextProvider } from './Contexts/LikeMeTabContext';
import { AuthProvider } from './Contexts/AuthContext';
import { lazy, Suspense } from 'react';
const MainPage = lazy(()=>import('./pages/MainPage'));
const LikeMe = lazy(()=>import('./pages/LikeMe'));
const Program = lazy(()=>import('./pages/Program'));
const Academy = lazy(()=>import('./pages/Academy'));
const Studio = lazy(()=>import('./pages/Studio'));
const AddNewPost = lazy(()=>import('./pages/AddNewPost'));
const ProgramDetail = lazy(()=>import('./pages/ProgramDetail'));
const DetailPost = lazy(()=>import('./pages/DetailPost'));
const LoginPage = lazy(()=>import('./pages/LoginPage'));
const PrivateRoute = lazy(()=>import('./utils/PrivateRoute'));



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
              <Suspense>
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
              </Suspense>
            </AuthProvider>
          </BrowserRouter>
        </LikeMeTabContextProvider>
      </ApplicationContextProvider>
    </div>
  );
}

export default App;
