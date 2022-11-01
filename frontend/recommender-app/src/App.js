import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Home from "./Pages/Home/Home";
import Items from "./Pages/Items/Items";
import ItemDetails from "./Pages/ItemDetails/ItemDetails";


function App() {
  return (
    <div id="layout"> 
    <Router> 
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path= "/items" element={<Items />} />
        <Route path= "/itemdetails" element={<ItemDetails />} />
      </Routes>
    </Router> 
    </div>

  );
}

export default App;
