import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./componants/Navbar";
import  Home  from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return(
    <div className="min-h-screen bg-richblack-900 text-white flex flex-col"> 
     <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />

     <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      
     </Routes>

     <div>
            <Toaster position="top-right" />
            {/* Other components */}
        </div>
    </div>
  );
}

export default App;
