import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/home/navBar";
import HeroSection from "../components/about/heroSection";
import Footer from "../components/home/footer";
import { MasonryGridGallery } from "../components/about/gridGalery";
import MyTeam from "../components/about/myTeam";
import { FeaturesSectionDemo } from "../components/about/features";
import VisionMission from "../components/about/VisionMission";

const About = () => {
  // State to store the fetched data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data from:", process.env.REACT_APP_API_URL2);

        const response = await axios.get(process.env.REACT_APP_API_URL2, {
          headers: {
            api_key: process.env.REACT_APP_API_KEY,
            access_token: process.env.REACT_APP_ACCESS_TOKEN,
            branch: "main",
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
  const galleryData = data?.entries?.[0]?.products;
  const visionMissionData = data?.entries?.[0]?.visionmission;
  const myTeamData = data?.entries?.[0]?.my_team_section;
  const featuresData = data?.entries?.[0]?.history_section;

  return (
    <div>
      <Navbar />
      {heroSectionData ? (
        <HeroSection data={heroSectionData} />
      ) : (
        <p>No hero data available</p>
      )}
      {galleryData ? (
        <MasonryGridGallery data={galleryData} />
      ) : (
        <p>No gallery data available</p>
      )}
      {visionMissionData ? (
        <VisionMission data={visionMissionData} />
      ) : (
        <p>No vision and mission data available</p>
      )}
      {myTeamData ? (
        <MyTeam data={myTeamData} />
      ) : (
        <p>No team data available</p>
      )}
      {featuresData ? (
        <FeaturesSectionDemo data={featuresData} />
      ) : (
        <p>No features data available</p>
      )}
      <Footer />
    </div>
  );
};

export default About;
