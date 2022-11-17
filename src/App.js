import './App.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages';
import allClaims from './pages/allClaims';
import allOwners from './pages/allOwners';
import allVehicles from './pages/allVehicles';
import vehicles from './pages/vehicles';
import claims from './pages/claims';
import owners from './pages/owners';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allowners" element={<allOwners />} />
        <Route path="/allvehicles" element={<allVehicles />} />
        <Route path="/allclaims" element={<allClaims />} />
        <Route path="/owners" element={<owners />} />
        <Route path="/vehicles" element={<vehicles />} />
        <Route path="/claims" element={<claims />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
