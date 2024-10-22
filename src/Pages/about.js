import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroSection from "../components/about/heroSection";
import Navbar from "../components/home/navBar";
import Footer from "../components/home/footer";
import { MasonryGridGallery } from "../components/about/gridGalery";
import MyTeam from "../components/about/myTeam";
import { FeaturesSectionDemo } from "../components/about/features";
import VisionMission from "../components/about/VisionMission";

const About = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data from:", process.env.REACT_APP_API_URL2);

        const response = await axios.get(
          " https://eu-cdn.contentstack.com/v3/content_types/about_us_page/entries?locale=en-us&include_fallback=true&include_branch=false",
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

  const HeaderData = data?.entries?.[0]?.hero;
  const GalleryData = data.entries?.[0]?.products;
  const VisionMissionData = data.entries?.[0]?.visionmission;
  const MyTeamData = data.entries?.[0]?.my_team_section;
  const FeaturesData = data.entries?.[0]?.history_section;

  return (
    <div>
      <Navbar />
      <HeroSection data={data} />
      <MasonryGridGallery data={data} />
      <VisionMission data={data} />
      <MyTeam data={data} />
      <FeaturesSectionDemo data={data} />
      <Footer />
    </div>
  );
};

export default About;
