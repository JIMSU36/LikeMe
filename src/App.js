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
import { ApplicationContextProvider } from './Contexts/TabContext';
import { AuthProvider } from './Contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <ApplicationContextProvider>
          <BrowserRouter>
            <AuthProvider>
              <ScrollToTop/>
              <Routes>
                {/* {userRoutes.map((route)=>{
                  return <Route path={route.path} element={route.component()} key={route.path}/>
                })} */}
                <Route path="/" element={<MainPage/>}/>
                <Route path="/adminLogin" element={<LoginPage/>}/>
                <Route path="/LikeMe" element={<LikeMe/>}/>
                <Route path="/Program" element={<Program/>}/>
                <Route path="/Academy" element={<Academy/>}/>
                <Route path="/Studio" element={<Studio/>}/>
                <Route path=":page/AddNewPost" element={<PrivateRoute component={<AddNewPost/>}/>}/>
                <Route path=":page/EditPost/:title" element={<PrivateRoute component={<AddNewPost/>}/>}/>
                {/* <PrivateRoute path=":page/AddNewPost" element={<AddNewPost/>}/>
                <PrivateRoute path=":page/EditPost/:title" element={<AddNewPost/>}/> */}
                <Route path=":page/:postTitle" element={<DetailPost/>}/>
                <Route path="/Program/:programName" element={<ProgramDetail/>}/>
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </ApplicationContextProvider>
    </div>
  );
}

export default App;
