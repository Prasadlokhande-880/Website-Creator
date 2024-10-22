import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/home/navBar";
import HeroSection from "../components/home/herosection";
import { BentoGridSecondDemo } from "../components/home/benefits";
import { TimelineDemo } from "../components/home/timeline";
import Footer from "../components/home/footer";
import { MovingCards } from "../components/about/movingCards";

const Home = () => {
  // State to store the fetched data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data from:", process.env.REACT_APP_API_URL);
        const response = await axios.get(process.env.REACT_APP_API_URL, {
          headers: {
            api_key: process.env.REACT_APP_API_KEY,
            access_token: process.env.REACT_APP_ACCESS_TOKEN,
          },
        });
        const fetchedData = response.data;
        setData(fetchedData);
        setLoading(false);
        console.log("Fetched data:", fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  // Extract the required sections from the fetched data
  const heroSectionData = data?.entries?.[0]?.hero;
  const highlightsSectionData = data?.entries?.[0]?.highlightssection;
  const purposesectionData = data?.entries?.[0]?.purposesection;
  const feedBack = data?.entries?.[0]?.feedbacks;

  console.log(feedBack);

  return (
    <div>
      <Navbar />
      {heroSectionData ? (
        <HeroSection data={heroSectionData} />
      ) : (
        <p>No hero data available</p>
      )}
      {highlightsSectionData ? (
        <BentoGridSecondDemo data={highlightsSectionData} />
      ) : (
        <p>No highlights data available</p>
      )}
      {purposesectionData ? (
        <TimelineDemo props={purposesectionData} />
      ) : (
        <p>No purposesectionData available</p>
      )}
      {feedBack ? (
        <MovingCards data={feedBack} />
      ) : (
        <p> NO Feed back available</p>
      )}
      <Footer />
    </div>
  );
};

export default Home;
