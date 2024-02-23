import React, { Suspense, useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <CountContext.Provider value={count}>
          <Count setCount={setCount}></Count>
        </CountContext.Provider>
      </div>
      <BrowserRouter>
        <Appbar></Appbar>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/" element={<Landing></Landing>}></Route>
          </Routes>
        </Suspense>
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

function Count({ count, setCount }) {
  return (
    <div>
      <CounterRenderere count={count}></CounterRenderere>
      <Buttons setCount={setCount} count={count}></Buttons>
    </div>
  );
}

function CounterRenderere() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}
function Buttons({ setCount }) {
  const count = useContext(CountContext);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
