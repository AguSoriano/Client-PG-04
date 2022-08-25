import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Detail from "./Components/Detail/Detail";



function App() {
  return (
    <div className="App">
     
      <Routes>
        {/* <Route exact path="/" element={ <LandingPage/> } /> */}
        <Route path="/home" element={<NavBar />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/home/products/:_id" element={<Detail />} />
      </Routes>
      
    </div>
  );
}

export default App;
