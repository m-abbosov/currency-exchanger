import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Currencies from "./pages/Currencies";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currencies" element={<Currencies />} />
      </Routes>

      <div className="background-container">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
          alt=""
        />
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
    </div>
  );
}

export default App;
