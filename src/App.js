import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkeletonLoader from "./components/home/SkeletonLoader";

// Lazy load all components
const DemoPage = lazy(() => import("./Pages/demoPage"));
const Home = lazy(() => import("./Pages/home"));
const About = lazy(() => import("./Pages/about"));
const SignUp = lazy(() => import("./Pages/signUp"));
const BlogPage = lazy(() => import("./Pages/blog"));
const DetailBlog = lazy(() => import("./Pages/detailblog"));
const Features = lazy(() => import("./Pages/FeaturesSection"));
const Error = lazy(() => import("./Pages/error"));
const CreateBlogs = lazy(() => import("./Pages/createblog"));
const Login = lazy(() => import("./Pages/Login"));
const Custom = lazy(() => import("./Pages/creatComponents"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SkeletonLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/BlogDetails/:id" element={<DetailBlog />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/blog/createblog" element={<CreateBlogs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CustomComponents" element={<Custom />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
