import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DemoPage from "./Pages/demoPage";
import Home from "./Pages/home";
import About from "./Pages/about";
import SignUp from "./Pages/signUp";
import BlogPage from "./Pages/blog";
import DetailBlog from "./Pages/detailblog";
import Features from "./Pages/FeaturesSection";
import Error from "./Pages/error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/BlogDetails/:id" element={<DetailBlog />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
