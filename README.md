---

# 🚀 Customizable Website with Contentstack, React, Tailwind, and More 🚀

Welcome to the source code for our dynamic, fully customizable website built on a modern tech stack. This project uses **Contentstack** for content management and deployment, alongside powerful frontend and backend tools, to provide a seamless, scalable solution for web development.

## 🎉 Features

- **Dynamic Content Updates**: Fetch and update content in real-time using Contentstack's Content Delivery API.
- **Drag-and-Drop UI Builder**: Built-in drag-and-drop editor powered by GrapeJS and generative AI for quick component creation.
- **Authentication System**: Secure, scalable authentication powered by Firebase.
- **Content Management**: Easily manage blog posts and other dynamic content.
- **Cloud Storage and Media Management**: Manage media assets with Cloudinary.

## 👨‍💻 Tech Stack

- **Frontend**: HTML, Tailwind CSS, ReactJS, GrapeJS  
- **Backend/Services**: Firebase, Cloudinary  
- **Content Management & Deployment**: Contentstack

## 🚀 Getting Started

### Prerequisites

Ensure the following are installed on your machine:

- **Node.js** and **npm**
- **Firebase CLI** (for Firebase integration)
- **Contentstack** account and API keys
- **Cloudinary** account (optional, for media storage)

### Project Setup

1. **Clone the Repository**  
   Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/yourrepository.git
   cd yourrepository
   ```

2. **Install Dependencies**  
   Install all required npm packages.
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env` file in the root directory with the following configuration. Replace placeholder values with your actual credentials.

   ```plaintext
   # Contentstack Configuration
   CONTENTSTACK_API_KEY=your_api_key_here
   CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token_here
   CONTENTSTACK_ENVIRONMENT=your_environment_name_here

   # Firebase Configuration
   FIREBASE_API_KEY=your_firebase_api_key_here
   FIREBASE_AUTH_DOMAIN=your_auth_domain_here
   FIREBASE_PROJECT_ID=your_project_id_here
   FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
   FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
   FIREBASE_APP_ID=your_app_id_here

   # Cloudinary Configuration (Optional)
   CLOUDINARY_CLOUD_NAME=your_cloud_name_here
   CLOUDINARY_API_KEY=your_cloudinary_api_key_here
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret_here
   ```

4. **Run the Project**  
   To start the project, use:
   ```bash
   npm start
   ```

## 📦 Contentstack Integration

The app is configured to use Contentstack's API for content management. Here’s how it works:

1. **Authentication**: Use Firebase authentication to secure user access.
2. **CRUD Operations**: Contentstack's Content Management API is configured for seamless Create, Read, Update, and Delete (CRUD) operations. All endpoints are managed in `src/services/contentstack.js`.

## 🛠️ Development Workflow

1. **UI Editing**: Use the drag-and-drop editor for a real-time preview and customization.
2. **Component Creation**: Generate custom components with the integrated generative AI feature.
3. **Deployment**: Follow the [Contentstack Deployment Guide](https://www.contentstack.com/docs/developers/deployment-guide/) for seamless deployment.

---

### Additional Resources

- **Live Website** ([link here](https://website-creator.eu-contentstackapps.com/))
- [Contentstack API Documentation](https://www.contentstack.com/docs/developers/apis/)
- [Contentstack Deployment Guide](https://www.contentstack.com/docs/developers/deployment-guide/)

---
