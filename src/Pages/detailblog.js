import React,{useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import Title from "../components/BlogDetails/title";
import ImageSection from "../components/BlogDetails/imageSection";
import PostContent from "../components/BlogDetails/postContent";
import Comment from "../components/BlogDetails/Comment";
import Author from "../components/BlogDetails/author";
import BlogCards from "../components/BlogDetails/blogCards";
import Footer from "../components/home/footer";
import CommentList from "../components/BlogDetails/CommentList";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../database/firebaseConfig";

const DetailBlog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const { id } = useParams();
  console.log(id);
  const comments = [
    {
      author: "Alice Johnson",
      text:
        "Great article! I learned a lot about the topic. Thanks for sharing.",
      date: "2024-10-17T09:20:34Z",
    },
    {
      author: "Bob Williams",
      text:
        "Very insightful post. I especially liked the detailed explanation on the third point.",
      date: "2024-10-16T14:12:22Z",
    },
    {
      author: "Charlie Brown",
      text:
        "I have a question about the topic—could you clarify how the process works in more detail?",
      date: "2024-10-15T11:45:08Z",
    },
    {
      author: "Diana Smith",
      text:
        "This is exactly what I was looking for. Thanks for putting this together!",
      date: "2024-10-14T16:30:50Z",
    },
  ];

  return (
    <>
      <div className="p-4">
        <Link
          to="/blog"
          className="text-blue-500 hover:text-blue-700 font-semibold no-underline transition duration-300"
        >
          {`<`} Blogs
        </Link>
      </div>

      <Title />
      <ImageSection />
      <PostContent />
      <Comment />
      <CommentList comments={comments} />
      <Author />
      <BlogCards />
      <Footer />
    </>
  );
};

export default DetailBlog;
