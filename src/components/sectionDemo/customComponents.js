import sectionNames from "../../Utils/sections";

const getCustomComponents = () => {
  const storedComponents = localStorage.getItem("customComponents");
  return storedComponents ? JSON.parse(storedComponents) : [];
};

const addCustomComponents = (editor) => {
  const customComponents = getCustomComponents();

  customComponents.forEach((component, index) => {
    editor.BlockManager.add(`custom-component-${index}`, {
      label: component.label,
      content: `${component.content} ${index}`,
      category: "Custom",
    });
  });
};

export default addCustomComponents;
