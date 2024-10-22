import React, { useState } from "react";
import { auth, db } from "../../database/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";

const Comment = ({ postId }) => {
  const [comment, setComment] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Check if user is logged in
  useState(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You need to be logged in to comment.");
      return;
    }

    if (!comment.trim()) {
      setError("Comment cannot be empty.");
      return;
    }

    try {
      const postRef = doc(db, "posts", postId);
      const postSnap = await getDoc(postRef);

      if (!postSnap.exists()) {
        setError("Post not found.");
        return;
      }

      const postData = postSnap.data();

      // Add comment to the post
      await updateDoc(postRef, {
        comments: arrayUnion({
          commentText: comment,
          userName: user.displayName || user.email, // use displayName or email if displayName is not set
          timestamp: new Date().toISOString(),
        }),
      });

      setComment("");
      setError("");
      setSuccessMessage("Comment added successfully!");
    } catch (error) {
      console.error("Error adding comment: ", error);
      setError("Failed to add comment. Please try again.");
    }
  };

  return (
    <div className="container font-sans bg-blue-100 rounded p-4 md:p-24 text-center">
      <h2 className="font-bold break-normal text-2xl md:text-4xl">
        Leave a Comment
      </h2>
      <h3 className="break-normal font-normal text-gray-600 text-base md:text-xl">
        We'd love to hear your thoughts
      </h3>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}

      <div className="w-full text-center pt-4">
        <form onSubmit={handleCommentSubmit}>
          <div className="max-w-sm mx-auto p-1 pr-0 flex flex-wrap items-center">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment here..."
              className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none border border-gray-200 h-12"
            ></textarea>
            <button
              type="submit"
              className="flex-1 w-52 mt-4 md:mt-0 block md:inline-block appearance-none bg-blue-500 text-white text-base font-semibold tracking-wider uppercase py-2 rounded shadow hover:bg-blue-400"
            >
              Submit Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comment;
