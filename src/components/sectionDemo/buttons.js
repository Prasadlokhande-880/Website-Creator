import sectionNames from "../../Utils/sections";

const buttons = (editor) => {
  editor.BlockManager.add("button-default", {
    label: `<button type="button" className="text-white bg-blue-700">Default</button>`,
    content: `<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>`,
    category: sectionNames.BUTTONS,
  });

  editor.BlockManager.add("button-alternative", {
    label: `<button type="button" className="text-gray-900 bg-white border">Alternative</button>`,
    content: `<button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>`,
    category: sectionNames.BUTTONS,
  });

  editor.BlockManager.add("button-dark", {
    label: `<button type="button" className="text-white bg-gray-800">Dark</button>`,
    content: `<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>`,
    category: sectionNames.BUTTONS,
  });

  editor.BlockManager.add("button-light", {
    label: `<button type="button" className="text-gray-900 bg-white border">Light</button>`,
    content: `<button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>`,
    category: sectionNames.BUTTONS,
  });

  editor.BlockManager.add("button-green", {
    label: `<button type="button" className="text-white bg-green-700">Green</button>`,
    content: `<button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>`,
    category: sectionNames.BUTTONS,
  });

  editor.BlockManager.add("button-red", {
    label: `<button type="button" className="text-white bg-red-700">Red</button>`,
    content: `<button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>`,
    category: sectionNames.BUTTONS,
  });

  editor.BlockManager.add("button-yellow", {
    label: `<button type="button" className="text-white bg-yellow-400">Yellow</button>`,
    content: `<button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>`,
    category: sectionNames.BUTTONS,
  });

  editor.BlockManager.add("button-purple", {
    label: `<button type="button" className="text-white bg-purple-700">Purple</button>`,
    content: `<button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>`,
    category: sectionNames.BUTTONS,
  });

  editor.BlockManager.add("button-gradient-blue", {
    label: `<button type="button" className="text-white bg-gradient-to-r from-blue-500 to-blue-700">Gradient Blue</button>`,
    content: `<button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Blue</button>`,
    category: sectionNames.BUTTONS,
  });

  editor.BlockManager.add("button-gradient-green", {
    label: `<button type="button" className="text-white bg-gradient-to-r from-green-400 to-green-600">Gradient Green</button>`,
    content: `<button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Green</button>`,
    category: sectionNames.BUTTONS,
  });

  editor.BlockManager.add("button-gradient-red", {
    label: `<button type="button" className="text-white bg-gradient-to-r from-red-400 to-red-600">Gradient Red</button>`,
    content: `<button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Red</button>`,
    category: sectionNames.BUTTONS,
  });

  editor.BlockManager.add("button-gradient-purple", {
    label: `<button type="button" className="text-white bg-gradient-to-r from-purple-500 to-purple-700">Gradient Purple</button>`,
    content: `<button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Purple</button>`,
    category: sectionNames.BUTTONS,
  });
};

export default buttons;
