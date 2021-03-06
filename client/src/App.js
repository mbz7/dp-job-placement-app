import "./App.css";
import Home from "./components/Home";
import SelectedJob from "./components/SelectedJob";
import NavbarComp from "./components/NavbarComp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <NavbarComp />

      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:id" element={<SelectedJob />} />
      </Routes>
    </div>
  );
}

export default App;
