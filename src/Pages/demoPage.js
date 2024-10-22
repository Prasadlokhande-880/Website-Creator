import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../database/firebaseConfig";
import grapesjs from "grapesjs";
import plugin from "grapesjs-tailwind";
import "grapesjs/dist/css/grapes.min.css";
import pluginWebpage from "grapesjs-preset-webpage";
import Basics from "grapesjs-blocks-basic";
import "../App.css";
import loginSection from "../components/sectionDemo/loginSection";
import applyStyles from "../Utils/style";
import inputBox from "../components/sectionDemo/InputBox";
import cards from "../components/sectionDemo/cards";
import buttons from "../components/sectionDemo/buttons";
import bottomNavigation from "../components/sectionDemo/bottomNavigation";
import breadCrumbs from "../components/sectionDemo/breadCrumbs";
import Dropdown from "../components/sectionDemo/dropdown";
import AddCustomComponents from "../components/sectionDemo/customComponents";

const DemoPage = () => {
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Redirect to login if not authenticated
        navigate("/login");
      }
    });

    // Load Tailwind CSS in the Website
    const link = document.createElement("link");
    link.href =
      "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Apply custom styles and keep a reference to the style element for cleanup
    const styleElement = applyStyles();

    // Initialize GrapesJS editor
    const newEditor = grapesjs.init({
      container: "#editor",
      plugins: [
        Basics,
        plugin,
        pluginWebpage,
        cards,
        loginSection,
        inputBox,
        buttons,
        bottomNavigation,
        breadCrumbs,
        AddCustomComponents,
      ],
      pluginsOpts: {
        [plugin]: {
          /* options for grapesjs-tailwind plugin */
        },
        [pluginWebpage]: {
          /* options for grapesjs-preset-webpage plugin */
        },
        [Basics]: {
          /* options for grapesjs-blocks-basic plugin */
        },
        inputBox: {
          /* options for Input Box */
        },
        loginSection: {
          /* options for your baseReactComponent */
        },
        cards: {
          /* options for your cards */
        },
        buttons: {
          /* options for your buttons */
        },
        bottomNavigation: {
          /* options for your bottomNavigation */
        },
        breadCrumbs: {
          /* options for your breadCrumbs */
        },
        Dropdown: {
          /* options for your carousel */
        },
      },
    });

    // Close all block categories initially
    newEditor.on("load", () => {
      newEditor.BlockManager.getCategories().forEach((category) => {
        category.set("open", false); // Close each category
      });
    });

    return () => {
      // Clean up editor instance and remove the style element when component unmounts
      if (newEditor) {
        newEditor.destroy();
      }
      if (styleElement) {
        document.head.removeChild(styleElement); // Remove the specific style element
      }
      if (link) {
        document.head.removeChild(link); // Clean up Tailwind link element
      }
      unsubscribe(); // Unsubscribe from onAuthStateChanged
    };
  }, [navigate]);

  return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
};

export default DemoPage;
