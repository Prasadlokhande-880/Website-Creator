import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load the components
const Home = lazy(() => import("./Pages/home"));
const DemoPage = lazy(() => import("./Pages/demoPage"));
const About = lazy(() => import("./Pages/about"));
const SignUp = lazy(() => import("./Pages/signUp"));
const BlogPage = lazy(() => import("./Pages/blog"));
const DetailBlog = lazy(() => import("./Pages/detailblog"));
const Features = lazy(() => import("./Pages/FeaturesSection"));

function App() {
  return (
    <BrowserRouter>
      {/* Use Suspense to wrap the Routes, providing a fallback UI */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/BlogDetails/:id" element={<DetailBlog />} />
          <Route path="/Features" element={<Features />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
