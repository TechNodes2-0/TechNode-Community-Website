import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Team from "./Pages/Team";
import Error from "./Pages/Error";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="scrollbar-w-0">
      <BrowserRouter basename="/">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Team" element={<Team />}></Route>
          <Route path="/Error" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
