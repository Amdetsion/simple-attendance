
import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./page/Add";
import View from "./page/view"
import Lists from "./component/map/ListPage"
import Navbars from "./component/navbar/Navbar";



import { useSelector } from "react-redux";

function App() {
 
  return (
    <React.Fragment>
    <div className="App">
     <Navbars/>
      <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/view" element={<View />} exact />
          <Route path="/lists" element={<Lists />} exact />

          
          
        </Routes>
        
    </div>
    </React.Fragment>
  );
  
}

export default App;
