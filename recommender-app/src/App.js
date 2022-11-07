import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";


import './App.css';
import Home from "./Pages/Home/Home";
import Items from "./Pages/Items/Items";
import ItemDetails from "./Pages/ItemDetails/ItemDetails";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";

import CssBaseline from "@mui/material/CssBaseline";
import { AccountContext } from "./Contexts/AccountContext";

function App() {
  
  const [accountType, setAccountType] = useState("Account");
  const [location, setLocation] = useState();

  return (
    <div id="layout"> 
    <CssBaseline />
    <AccountContext.Provider
      value={{accountType, setAccountType, location, setLocation}}
    >
    <Router> 
      <Header />
      <NavBar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Items key={location}/>} />
        <Route path="/item/:id" element={<ItemDetails />} />
      </Routes>
    </Router> 
    </AccountContext.Provider>
    </div>
  );
}

export default App;
