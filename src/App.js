import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from "./Hero";
import Footer from "./Footer";
import Faq from './Faq';

function App() {
  return (
    <div className="bg-black bg-opacity-75  bg-[url('https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg')] bg-blend-darken">
      <div>
        <Navbar />
        <Hero />
        <Faq/>
        <Footer/>
        


      </div>
    </div>

  );
}

export default App;
