import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Title from "../components/BlogDetails/title";
import ImageSection from "../components/BlogDetails/imageSection";
import PostContent from "../components/BlogDetails/postContent";
import Comment from "../components/BlogDetails/Comment";
import Author from "../components/BlogDetails/author";
import Footer from "../components/home/footer";
import CommentList from "../components/BlogDetails/CommentList";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../database/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import BlogCards from "../components/Blog/BlogCards";

const DetailBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate, auth]);

  useEffect(() => {
    const fetchPostById = async () => {
      try {
        const postRef = doc(db, "posts", id);
        const postSnap = await getDoc(postRef);

        if (postSnap.exists()) {
          setPost(postSnap.data());
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching post: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostById();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

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

      <Title title={post.blogHeading} time={post.createdAt} />
      <ImageSection imageUrl={post.imageUrl} />
      <PostContent
        content={post.content}
        postDetails={post.postDetails}
        author={post.name}
        designation={post.designation}
      />
      <Comment postId={id} />
      <CommentList comments={post.comments || []} />
      <Author author={post.name} designation={post.designation} />
      <BlogCards />
      <Footer />
    </>
  );
};

export default DetailBlog;
