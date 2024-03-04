
import './App.css';
import Navbar from './Component/Navbar';
import Footer from "./Component/Footer";
import Login from './login/Login';
import MainPage from './login/MainPage';
import Display from './movie/Display'
import Adminpage from './login/Adminpage';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Cinema from './Component/flim/Cinema';
import Test from './Component/Test/Test';
import bg from './background.jpg'
import Signup from './login/Signup';

function App() {
  return (
    <div className="bg-black bg-opacity-75 bg-blend-darken" style={{ backgroundImage: `url(${bg})` }} >
    
      <div className='overflow-x-hidden'>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/movie' element={<Display/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/adminpage" element={<Adminpage/>}/>
          <Route path="/movies" element={<Cinema/>}/>
          <Route path="/Test" element={<Test/>}/>
          <Route path='/Signup' element={<Signup/>}/>
         
        </Routes>
        

        
        <Footer/>
      </BrowserRouter>

      </div>
   </div>

  );
}

export default App;
