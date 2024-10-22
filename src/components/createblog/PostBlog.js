import React, { useState, useRef, useMemo } from "react";
import axios from "axios";
import { Label } from "../signUpForm/design/label";
import { Input } from "../signUpForm/design/input";
import { cn } from "../../lib/utils";
import JoditEditor from "jodit-react";
import { db } from "../../database/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Firestore functions

export default function PostContent() {
  // State for image, form fields, and other data
  const [image, setImage] = useState(null);
  const [URLimg, setUrlimg] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [postDetails, setPostDetails] = useState("");
  const [postCategory, setPostCategory] = useState("");
  const [blogHeading, setBlogHeading] = useState(""); // Blog heading state
  const [errorMessage, setErrorMessage] = useState("");
  const [uploadStatus, setUploadStatus] = useState("Upload Image");
  const editor = useRef(null);
  const [placeholder] = useState("Start typing...");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder,
    }),
    [placeholder]
  );

  // Function to handle image upload to Cloudinary
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "zzdxjxts");
    formData.append("cloud_name", "dwzegbafg");

    try {
      setUploadStatus("Uploading...");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dwzegbafg/image/upload",
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(progress);
          },
        }
      );
      setUrlimg(response.data.secure_url);
      console.log(URLimg);
      setUploadProgress(0);
      setUploadStatus("Upload Successful");
    } catch (error) {
      console.error("Image upload failed: ", error);
      setErrorMessage("Image upload failed. Please try again.");
      setUploadStatus("Upload Failed");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !designation ||
      !postDetails ||
      !content ||
      !postCategory ||
      !blogHeading ||
      !image
    ) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      // Store post details in Firestore
      const docRef = await addDoc(collection(db, "posts"), {
        name,
        designation,
        postDetails,
        content,
        imageUrl: URLimg,
        postCategory,
        blogHeading,
        createdAt: serverTimestamp(),
      });

      // Clear fields after successful submission
      setName("");
      setDesignation("");
      setPostDetails("");
      setContent("");
      setPostCategory("");
      setBlogHeading("");
      setImage(null);
      setUrlimg("");
      setErrorMessage("");

      console.log("Post content submitted successfully", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
      setErrorMessage("Failed to submit post. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-black pt-10">
      <div className="max-w-[900px] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Create a New Post
        </h2>
        <form className="my-8" onSubmit={handleSubmit}>
          {/* Name Input */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </LabelInputContainer>

          {/* Designation Input */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="designation">Designation</Label>
            <Input
              id="designation"
              placeholder="Enter your designation"
              type="text"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
          </LabelInputContainer>

          {/* Blog Heading Input */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="blogHeading">Blog Heading</Label>
            <Input
              id="blogHeading"
              placeholder="Enter blog heading"
              type="text"
              value={blogHeading}
              onChange={(e) => setBlogHeading(e.target.value)}
              required
            />
          </LabelInputContainer>

          {/* Image Upload */}
          <div className="mb-5">
            <Label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="image"
            >
              Upload Image
            </Label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:bg-gray-800 dark:text-gray-400 focus:outline-none dark:border-gray-600"
              id="image"
              type="file"
              onChange={handleImageChange}
              required
            />
            {uploadProgress > 0 && (
              <div className="text-sm text-gray-500 mt-2">
                Upload Progress: {uploadProgress}%
              </div>
            )}
            {uploadStatus && <div className="text-sm mt-2">{uploadStatus}</div>}
          </div>

          {/* Post Details Input */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="postDetails">Post Details</Label>
            <Input
              id="postDetails"
              placeholder="Enter post details"
              type="text"
              value={postDetails}
              onChange={(e) => setPostDetails(e.target.value)}
              required
            />
          </LabelInputContainer>

          {/* Content Editor */}
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
            onChange={() => {}}
          />

          {/* Post Category Input */}
          <LabelInputContainer className="mb-8 pt-4">
            <Label htmlFor="postCategory">Post Category</Label>
            <Input
              id="postCategory"
              placeholder="Enter post category"
              type="text"
              value={postCategory}
              onChange={(e) => setPostCategory(e.target.value)}
              required
            />
          </LabelInputContainer>

          {/* Submit Button */}
          <button
            className="bg-gradient-to-br from-black to-neutral-600 w-full text-white rounded-md h-10 font-medium"
            type="submit"
          >
            Post Content &rarr;
            <BottomGradient />
          </button>

          {/* Error Message Display */}
          {errorMessage && (
            <p className="text-red-500 text-center mt-4">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="group-hover:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

const LabelInputContainer = ({ children, className }) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
    {children}
  </div>
);
