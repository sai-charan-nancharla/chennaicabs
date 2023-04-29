import "./App.css";
import Home from "./home.js";
import Employment from "./Employment.js";
import Driver from "./Driver.js";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Employment" element={<Employment />} />
          <Route path="Driver" element={<Driver />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
