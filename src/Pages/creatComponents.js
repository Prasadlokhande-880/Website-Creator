import { useState, useEffect } from "react";
import { LoaderIcon } from "lucide-react";
import getTailwindComponent from "../lib/chatGPT";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "../components/home/navBar";
import Footer from "../components/home/footer";

export default function TailwindComponentPage() {
  const [componentDetails, setComponentDetails] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [customComponents, setCustomComponents] = useState(() => {
    // Retrieve the custom components from local storage if available
    const storedComponents = localStorage.getItem("customComponents");
    return storedComponents ? JSON.parse(storedComponents) : [];
  });

  const handleGenerateComponent = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    setGeneratedCode("");

    try {
      const result = await getTailwindComponent(componentDetails);
      const code = result.match(/```([^`]+)```/);
      setGeneratedCode(code ? code[1] : "No code generated");
    } catch (error) {
      console.error("Error generating code:", error);
      setError("Error generating component");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddCustomComponent = () => {
    const newComponent = {
      label: `<button type="button" className="text-white bg-blue-700">Custom Button</button>`,
      content: generatedCode,
      category: "custom components",
    };
    const updatedComponents = [...customComponents, newComponent];
    setCustomComponents(updatedComponents);
    setGeneratedCode("");

    // Save the updated components to local storage
    localStorage.setItem("customComponents", JSON.stringify(updatedComponents));
  };

  // Use effect to update local storage whenever customComponents changes
  useEffect(() => {
    localStorage.setItem("customComponents", JSON.stringify(customComponents));
  }, [customComponents]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col min-h-screen p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">
          Generate Tailwind CSS Component
        </h1>

        <form
          onSubmit={handleGenerateComponent}
          className="flex flex-col space-y-4"
        >
          {/* Input for component details */}
          <div>
            <label className="block mb-2 text-lg font-medium">
              Component Details
            </label>
            <textarea
              placeholder="Enter component details (e.g., buttons, cards, forms)"
              className="border p-2 w-full h-32"
              value={componentDetails}
              onChange={(e) => setComponentDetails(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="flex items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              disabled={isLoading || !componentDetails.trim()}
            >
              {isLoading ? (
                <LoaderIcon className="w-5 h-5 animate-spin" />
              ) : (
                "Generate Component"
              )}
            </button>
          </div>

          {isLoading && (
            <div className="flex justify-center items-center">
              <LoaderIcon className="w-5 h-5 animate-spin" />
              <p className="ml-2 text-gray-600">Generating component...</p>
            </div>
          )}

          {!isLoading && error && (
            <div className="text-red-500 bg-red-50 p-4 rounded-md">{error}</div>
          )}

          {/* Generated code display */}
          {generatedCode && (
            <div className="bg-gray-800 text-white p-4 rounded mt-4">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {generatedCode}
              </ReactMarkdown>
              {/* Button to add the component to the custom components array */}
              <button
                onClick={handleAddCustomComponent}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
              >
                Add to Custom Components
              </button>
            </div>
          )}
        </form>

        {/* Display custom components */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Custom Components</h2>
          <ul className="space-y-4">
            {customComponents.map((component, index) => (
              <li key={index} className="bg-white p-4 border rounded">
                <div dangerouslySetInnerHTML={{ __html: component.label }} />
                <pre className="bg-gray-800 text-white p-4 mt-2 rounded">
                  {component.content}
                </pre>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
