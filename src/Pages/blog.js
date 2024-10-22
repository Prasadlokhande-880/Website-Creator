import React, { useEffect } from "react";
import BlogHeroSection from "../components/Blog/BlogHeroSection";
import Navbar from "../components/home/navBar";
import Footer from "../components/home/footer";
import BlogCards from "../components/Blog/BlogCards";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../database/firebaseConfig";

const BlogPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

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
