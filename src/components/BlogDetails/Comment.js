import React from "react";

const Comment = () => {
  return (
    <div className="container font-sans bg-blue-100 rounded mt-8 p-4 md:p-24 text-center">
      <h2 className="font-bold break-normal text-2xl md:text-4xl">
        Leave a Comment
      </h2>
      <h3 className="break-normal font-normal text-gray-600 text-base md:text-xl">
        We'd love to hear your thoughts
      </h3>
      <div className="w-full text-center pt-4">
        <form action="#">
          <div className="max-w-sm mx-auto p-1 pr-0 flex flex-wrap items-center">
            <textarea
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
