import React from "react";

const BlogCards = () => {
  const blogPosts = [
    {
      title: "Aperture Science",
      category: "GETTING STARTED",
      description:
        "I’ll be honest, we’re throwing science at the wall here to see what sticks. No idea what it’ll do.",
      imgSrc: "https://source.unsplash.com/_AjqGGafofE/400x200",
      readTime: "2 MIN READ",
    },
    {
      title: "Biolumini algae diatomeae ecology.",
      category: "UNDERWATER",
      description:
        "Lorem ipsum dolor sit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
      imgSrc: "https://source.unsplash.com/_AjqGGafofE/400x200",
      readTime: "4 MIN READ",
    },
    {
      title: "What is life but a teardrop in the eye of infinity?",
      category: "FOREST",
      description:
        "Mollis pretium integer eros et dui orci, lectus nec elit sagittis neque.",
      imgSrc: "https://source.unsplash.com/DEa8_vxKlEo/400x200",
      readTime: "7 MIN READ",
    },
  ];

  return (
    <div className="container w-full max-w-6xl mx-auto px-2 py-8">
      <div className="flex flex-wrap -mx-2">
        {blogPosts.map((post, index) => (
          <div className="w-full md:w-1/3 px-2 pb-12" key={index}>
            <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
              <a href="#" className="no-underline hover:no-underline">
                <img
                  src={post.imgSrc}
                  className="h-48 w-full rounded-t shadow"
                  alt={post.title}
                />
                <div className="p-6 h-auto md:h-48">
                  <p className="text-gray-600 text-xs md:text-sm">
                    {post.category}
                  </p>
                  <div className="font-bold text-xl text-gray-900">
                    {post.title}
                  </div>
                  <p className="text-gray-800 font-serif text-base mb-5">
                    {post.description}
                  </p>
                </div>
                <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                  <img
                    className="w-8 h-8 rounded-full mr-4"
                    src="http://i.pravatar.cc/300"
                    alt="Author"
                  />
                  <p className="text-gray-600 text-xs md:text-sm">
                    {post.readTime}
                  </p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
