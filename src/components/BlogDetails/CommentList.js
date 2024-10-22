import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div className="container font-sans bg-white rounded p-4 md:p-24">
      <h2 className="font-bold break-normal text-2xl md:text-4xl mb-4">
        Comments
      </h2>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded shadow mb-4 text-left"
          >
            <p className="font-semibold text-lg">
              {comment.userName || "Anonymous"}{" "}
              {/* Display "Anonymous" if no userName */}
            </p>
            <p className="text-gray-600 mt-2">{comment.commentText}</p>
            <p className="text-gray-400 text-sm mt-2">
              {comment.timestamp
                ? new Date(comment.timestamp).toLocaleDateString() +
                  " at " +
                  new Date(comment.timestamp).toLocaleTimeString()
                : "No date available"}
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
