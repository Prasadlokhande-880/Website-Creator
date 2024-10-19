import React from "react";
import BlogHeroSection from "../components/Blog/BlogHeroSection";
import Navbar from "../components/home/navBar";
import Footer from "../components/home/footer";
import BlogCards from "../components/Blog/BlogCards";

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <BlogHeroSection />
      <BlogCards />
      <Footer />
    </div>
  );
};

export default BlogPage;
