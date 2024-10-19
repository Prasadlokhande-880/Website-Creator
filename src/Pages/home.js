import React, { useEffect, useState } from "react";
import Navbar from "../components/home/navBar";
import HeroSection from "../components/home/herosection";
import { BentoGridSecondDemo } from "../components/home/benefits";
import { TimelineDemo } from "../components/home/timeline";
import Footer from "../components/home/footer";

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = process.env.REACT_APP_API_URL;
        const headers = {
          api_key: process.env.REACT_APP_API_KEY,
          access_token: process.env.REACT_APP_ACCESS_TOKEN,
          branch: process.env.REACT_APP_BRANCH,
        };

        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result.entries && result.entries.length > 0) {
          setData(result.entries[0]); // Access the first entry
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection data={data} />
      <BentoGridSecondDemo />
      <TimelineDemo />
      <Footer />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Home;
