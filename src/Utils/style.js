// Utils/style.js
const applyStyles = () => {
  // Create a style element to hold custom CSS
  const styleElement = document.createElement("style");
  styleElement.innerHTML = `
        .gjs-two-color {
          color: rgb(179,185,196) !important;
        }
        .gjs-one-bg {
          background-color: rgb(9, 30, 66) !important;
        }
        .gjs-block {
          border: 1px solid white !important;
          border-radius: 8px !important;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .gjs-block:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgb(117, 129, 149);
          color:rgb(255,255,255) !important;
        }
        .gjs-title {
          transition: background-color 0.3s;
        }
        .gjs-title:hover {
          background-color: rgb(98, 111, 134);
          color:rgb(247,248,249) !important;
        }
        .gjs-four-color-h:hover {
          color:rgb(247,248,249) !important;
        }
      `;
  document.head.appendChild(styleElement);
  return styleElement; // Return reference to the style element for cleanup
};

export default applyStyles;
