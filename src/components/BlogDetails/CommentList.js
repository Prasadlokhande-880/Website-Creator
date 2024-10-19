import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div className="container font-sans bg-white rounded mt-8 p-4 md:p-24">
      <h2 className="font-bold break-normal text-2xl md:text-4xl mb-4">
        Comments
      </h2>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded shadow mb-4 text-left"
          >
            <p className="font-semibold text-lg">{comment.author}</p>
            <p className="text-gray-600 mt-2">{comment.text}</p>
            <p className="text-gray-400 text-sm mt-2">
              {new Date(comment.date).toLocaleDateString()} at{" "}
              {new Date(comment.date).toLocaleTimeString()}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-600">
          No comments yet. Be the first to comment!
        </p>
      )}
    </div>
  );
};

export default CommentList;
