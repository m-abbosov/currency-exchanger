import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Currencies from "./pages/Currencies";
import Header from "./components/Header";
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currencies" element={<Currencies />} />
      </Routes>
    </div>
  );
}

export default App;
