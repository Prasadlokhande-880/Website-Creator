import React, { useEffect } from "react";
import Navbar from "../components/home/navBar";
import Footer from "../components/home/footer";
import PostContent from "../components/createblog/PostBlog";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../database/firebaseConfig";

const CreateBlog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login"); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup auth listener on unmount
  }, [navigate]);

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="mt-20 mb-10">
        <PostContent />
      </div>
      <Footer />
    </div>
  );
};

export default CreateBlog;
