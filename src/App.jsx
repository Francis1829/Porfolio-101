import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "../src/Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import AppRouter from "./Router and Outlet/AppRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
