import ai from "./google";

const generateComponentPrompt = (Prompt) => {
  return `
        Create a simple HTML component using Tailwind CSS for styling.
        Write the code between triple backticks (\\\`\\\`\\\`), starting and ending with them.

        The following is the component description:
        ${Prompt}
    `;
};

const getTailwindComponent = async (PromptData) => {
  const prompt = generateComponentPrompt(PromptData);

  if (!prompt) {
    throw new Error("Prompt not generated");
  }

  const model = ai.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction:
      "Create a simple HTML component using Tailwind CSS. Do not provide medical advice or mention consulting a doctor.",
  });

  try {
    const result = await model.generateContent(prompt);
    const responseText = await result.response.text();

    return responseText;
  } catch (error) {
    console.error("Error generating HTML component:", error);
    throw new Error("Error generating HTML component");
  }
};

export default getTailwindComponent;
