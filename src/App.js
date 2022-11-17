import './App.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllOwners from './pages/allOwners';
import AllVehicles from './pages/allVehicles';
import AllClaims from './pages/allClaims';
import Owners from './pages/owners';
import Vehicles from './pages/vehicles';
import Claims from './pages/claims';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/allowners" element={<AllOwners />} />
        <Route path="/allvehicles" element={<AllVehicles />} />
        <Route path="/allclaims" element={<AllClaims />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/claims" element={<Claims />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
