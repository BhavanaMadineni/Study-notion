import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import {useState} from "react"
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const [isLoggedin, setIsLoggedin] =  useState(false);
  return (
    <div className=" bg-richblack-900 flex flex-col w-screen h-100%">
      <Navbar isLoggedin ={isLoggedin} setIsLoggedin={setIsLoggedin}/>

      <Routes>

        <Route path="/" element={<Home isLoggedin ={isLoggedin}/>}/>
        <Route path="Login" element={<Login setIsLoggedin={setIsLoggedin} />}/>
        <Route path="signup" element={<Signup setIsLoggedin={setIsLoggedin} />}/>
        <Route path="dashboard" element={
          <PrivateRoute isLoggedin={isLoggedin}>
            <Dashboard/>
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
