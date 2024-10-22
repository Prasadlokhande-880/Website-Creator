import React from "react";

const PostContent = ({ content, postDetails, author, designation }) => {
  return (
    <div className="container max-w-5xl mx-auto -mt-32">
      <div className="mx-0 sm:mx-6">
        <div
          className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {/* Dynamic Author and Designation */}
          <p className="text-2xl md:text-3xl mb-5">
            {author ? `${author}, ` : "Dear Reader, "}
            {designation ? `${designation}` : ""}
          </p>

          {/* Post Details (Optional) */}
          {postDetails && (
            <p className="text-xl md:text-2xl mb-6">{postDetails}</p>
          )}

          {/* Render blog content passed as prop */}
          <div dangerouslySetInnerHTML={{ __html: content }} />

          {/* Optional: Add a quote or extra content */}
          <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
            {designation}
            <br /> - {author}
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
