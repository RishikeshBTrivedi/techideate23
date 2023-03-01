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

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/faqs" element={<Faqs/>}/>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
