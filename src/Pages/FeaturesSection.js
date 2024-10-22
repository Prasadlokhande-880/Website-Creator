import React, { useState, useEffect } from "react";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import HeroSection from "../components/FeaturesSection/HeroSection";
import Navbar from "../components/home/navBar";
import Footer from "../components/home/footer";
import axios from "axios";

const Features = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data from:", process.env.REACT_APP_API_URL2);

        const response = await axios.get(
          "https://eu-cdn.contentstack.com/v3/content_types/features_page/entries?locale=en-us&include_fallback=true&include_branch=false",
          {
            headers: {
              api_key: process.env.REACT_APP_API_KEY,
              access_token: process.env.REACT_APP_ACCESS_TOKEN,
              branch: "main",
            },
          }
        );

        console.log("Full API response:", response);

        const fetchedData = response?.data;

        setData(fetchedData);
        console.log("Fetched data:", fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  // Extracting the header and products data
  const heroSectionData = data?.entries?.[0]?.herosection;
  const productsSectionData = data?.entries?.[0]?.products_section;

  return (
    <div>
      <Navbar />
      {heroSectionData ? (
        <HeroSection
          heroHeader={heroSectionData.hero_header}
          heroDetails={heroSectionData.hero_details}
          demoLink={heroSectionData.demo_link}
        />
      ) : (
        <p>No hero section data available</p>
      )}
      {productsSectionData ? (
        <FeaturesSection data={productsSectionData} />
      ) : (
        <p>No features section data available</p>
      )}
      <Footer />
    </div>
  );
};

export default Features;
