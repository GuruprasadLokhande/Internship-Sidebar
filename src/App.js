import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Setting from "./menus/Setting";
import ManageUsers from "./menus/ManageUsers";
import ShortVideoLibrary from "./menus/ShortVideoLibrary";
import Home from "./menus/Hhome";
import Sidenavbar from "./components/Sidenavbar"; 

const App = () => {
  return (
    
      <Router>
      <div style={{ display: "flex" }}>
        <Sidenavbar />
        <div
          style={{
            backgroundColor: "#191d38", 
            minHeight: "100vh", 
            padding: "20px",
            width: "calc(100%)",
          }}
        >
          <div
            style={{
              marginLeft: "300px", 
              padding: "20px",
              backgroundColor: "#191d38", 
              minHeight: "100vh", 
              overflow: "auto", 
            }}
          >
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/videos" element={<ShortVideoLibrary />} />
              <Route path="/manage-users" element={<ManageUsers />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="/" element={<Home />} /> Default route
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    
    
    

     
  );
};

export default App;
