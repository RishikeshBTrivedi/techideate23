import logo from './logo.svg';
import './App.css';
import Particles from './components/Particles';
import "./fonts/Valorax-lg25V.otf"  
import logo2 from "./logotech.png"
import Nav from './Navbar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from './Landing';
import Faqs from './Faqs';

function App() {
  return (
    <div>
      <Nav/>
    <Landing/>
    <Faqs/>

    </div>
    
    
  );
}

export default App;
