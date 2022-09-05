import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Detail from "./Components/Detail/Detail";
import LandingPage from "./Components/LandingPage/LandinPage";
import Create from "./Components/Create/Create";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import Favorite from "./Components/Favorite/Favorite";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <NavBar path="/" element={NavBar} />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="products/:id" element={<Detail />} />
        <Route path="new" element={<Create />} />
        <Route path="profile" element={<Profile />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="shop" element={<Shop />} />
        <Route path="newproduct" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
