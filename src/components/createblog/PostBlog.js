import React, { useState, useRef, useMemo } from "react";
import axios from "axios"; // Import axios for making API requests
import { Label } from "../signUpForm/design/label";
import { Input } from "../signUpForm/design/input";
import { cn } from "../../lib/utils";
import JoditEditor from "jodit-react";

export default function PostContent() {
  const [image, setImage] = useState(null); // State to hold the image file
  const [URLimg, setUrlimg] = useState(""); // State to hold the uploaded image URL
  const [content, setContent] = useState("");
  const editor = useRef(null);
  const [placeholder] = useState("Start typing...");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder,
    }),
    [placeholder]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post content submitted");
  };

  // Function to upload the image to Cloudinary
  const uploadImage = async () => {
    try {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "zzdxjxts");
      data.append("cloud_name", "dwzegbafg");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dwzegbafg/image/upload",
        data
      );

      setUrlimg(response.data.secure_url);
      console.log("Image URL:", response.data.secure_url);
    } catch (err) {
      console.error("Error uploading image:", err);
    }
  };

  // Handle file change when user selects an image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // Call uploadImage function when an image is selected
  const handleImageUpload = async (e) => {
    e.preventDefault();
    if (image) {
      await uploadImage();
    } else {
      console.log("No image selected");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-black">
      <div className="max-w-[900px] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Create a New Post
        </h2>
        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" type="text" />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="designation">Designation</Label>
            <Input
              id="designation"
              placeholder="Enter your designation"
              type="text"
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="postDetails">Post Details</Label>
            <Input
              id="postDetails"
              placeholder="Enter post details"
              type="text"
            />
          </LabelInputContainer>

          {/* Image Upload Section */}
          <div className="mb-5">
            <Label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="small_size"
            >
              Small file input
            </Label>
            <Input
              className="block w-full text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="small_size"
              type="file"
              onChange={handleImageChange} // Handle image change
            />
          </div>

          {/* Image Upload Button */}
          <button
            className="mb-4 bg-gradient-to-br from-black to-neutral-600 w-full text-white rounded-md h-10 font-medium"
            onClick={handleImageUpload} // Trigger image upload
          >
            Upload Image
          </button>

          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => {}}
          />

          <LabelInputContainer className="mb-8">
            <Label htmlFor="postCategory">Post Category</Label>
            <Input
              id="postCategory"
              placeholder="Enter post category"
              type="text"
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br from-black to-neutral-600 w-full text-white rounded-md h-10 font-medium"
            type="submit"
          >
            Post Content &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
