import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Card from "./BlogCard";
import Heading from "../home/design/heading";
import { db } from "../../database/firebaseConfig";

const BlogCards = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const posts = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCardData(posts);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="mt-4 p-2">
      <Heading
        whiteHeading="Chat Smarter, Not Harder"
        orangeHeading="with Brainwave"
      />
      <div className="m-4 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.imageUrl}
            title={card.name}
            description={card.postDetails}
            tags={card.postCategory ? [card.postCategory] : []}
            Id={card.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
