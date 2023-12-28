
import './App.css';
import Navbar from './Navbar';
import Footer from "./Footer";
import Login from './Login';
import MainPage from './MainPage';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Movie from './movie/Movie';
import Display from './movie/Display';



function App() {
  return (
    <div className="bg-black bg-opacity-75  bg-[url('https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg')] bg-blend-darken">
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/movie' element={<Display/>}/>

        </Routes>
        

        {/* <Login/> */}
        <Footer/>
      </BrowserRouter>

      </div>
    </div>

  );
}

export default App;
