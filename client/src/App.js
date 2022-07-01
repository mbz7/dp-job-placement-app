import "./App.css";
import Home from "./components/Home";
import SelectedJob from "./components/SelectedJob";
// import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:id" element={<SelectedJob />} />
      </Routes>
    </div>
  );
}

export default App;
