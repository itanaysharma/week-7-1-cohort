import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar></Appbar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/" element={<Landing></Landing>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          // window.location.href = "/";
          navigate("/");
        }}
      >
        Landing
      </button>
      <button
        onClick={() => {
          // window.location.href = "/dashboard";
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
}

export default App;
