import logo from './logo.svg';
import './App.css';
import Particles from './components/Particles';
import "./fonts/Valorax-lg25V.otf"  
import logo2 from "./logotech.png"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from './Landing';
import Faqs from './Faqs';
import Events from './Events';
import Speaker from './Speaker';
import Sponsors from './Sponsors';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/faqs" element={<Faqs/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/speakers" element={<Speaker/>}/>
      <Route path="/sponsors" element={<Sponsors/>}/>



    </Routes>
  </BrowserRouter>
  );
}

export default App;
