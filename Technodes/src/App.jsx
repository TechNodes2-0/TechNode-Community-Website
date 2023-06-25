import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";

export default function App() {
  return (
    <div className="scrollbar-w-0">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Error" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
