import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Detail from "./Components/Detail/Detail";
import LandingPage from './Components/LandingPage/LandinPage';
import Create from './Components/Create/Create';



function App() {
  return (
    <div className="App">
     
     <NavBar path="/" element={NavBar} />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="products/:id" element={<Detail />} />
        <Route  path="new" element={<Create />} />
      </Routes>
    </div>
      
  );
}

export default App;
