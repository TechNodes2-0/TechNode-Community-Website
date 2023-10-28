import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Team from "./Pages/Team";
import Error from "./Pages/Error";
import Navbar from "./components/Navbar";
import Event from "./Pages/EventPage/Event"
import Contact from "./Pages/Contact";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
export default function App() {
  return (
    <div className="scrollbar-w-0">
      <BrowserRouter basename="/">
        <Navbar/>
        <div className="pt-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Projects" element={<ProjectPage />}></Route>
          <Route path="/Event" element={<Event />}></Route>
          <Route path="/Team" element={<Team />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Error" element={<Error />}></Route>
        </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}
