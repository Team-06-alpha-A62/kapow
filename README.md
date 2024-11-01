## Table of Contents

- [Overview](#description)
- [Key Features](#key-features)
- [Setup Instructions](#setup-instructions)

<!-- End of Section -->

## Description

A small website about gifs using Giphy API to display trending gifs, search by terms, save to favorites and upload to Giphy directly

### [Live demo](https://kapow.nikola-nenovski.info)

<!-- End of Section -->

## Key Features

- **Optimized GIF Search**  
  Find GIFs by keywords with an optimized debounce search, reducing unnecessary API calls.

- **Trending GIFs**  
  Discover popular GIFs at a glance with the Trending section, allowing you to stay up-to-date with what's popular.
  ![Trending GIFs](https://nikola-nenovski.info/kapow/kapow-trending.gif)  

- **Favorite GIFs**  
  Save your favorite GIFs for quick access, making it easy to revisit and share them later.
  ![Save GIFs](https://nikola-nenovski.info/kapow/kapow-favourites.gif)  

- **GIF Upload with Drag & Drop**  
  Upload GIFs from your device using a drag-and-drop interface with a preview, making it user-friendly and convenient.
  ![Upload GIFs](https://nikola-nenovski.info/kapow/kapow-upload.gif)  

- **Responsive Masonry Grid Layout**  
  Display GIFs in a responsive, Pinterest-like masonry grid layout powered by the Masonry library, creating a visually pleasing browsing experience.

- **Toast Notifications**  
  Get real-time feedback with toast notifications for actions such as saving favorites, uploading GIFs, and more.

<!-- End of Section -->

## Setup Instructions

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/en/download/), preferably the latest stable version
- You have a Git client installed on your local machine

### Installation

To view and run this application locally, please follow these steps:

1. **Clone the Repository**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/Team-06-alpha-A62/kapow.git
   ```

2. **Navigate to the Project Directory**

   Change your directory to the project folder:

   ```bash
   cd ./template
   ```

3. **Install Dependencies**

   Run the following command to install the necessary npm packages:

   ```bash
   npm install
   ```

4. **Create `apiConfig.js`**

   Inside the `src/common` directory, create a new file called `apiConfig.js`, or through your terminal,assuming that you're inside the template directory, you can paste this code:

   ```bash
   touch src/common/apiConfig.js
   ```

5. **Add Your API Key**

   Copy your existing key, or create a new one [from here](https://developers.giphy.com/dashboard/?create=true). Open `apiConfig.js` in your text editor and add your API key in the following format:

   ```javascript
   export const API_KEY = 'api_as_string';
   ```

6. **Open `index.html` with Live Server**

   To view the application, open `index.html` with Live Server. If you're using VS Code, you can install the Live Server extension. Right-click on `index.html` and select `Open with Live Server`.

### Usage

After completing the above steps, you should be able to view and interact with the application in your browser. Enjoy!
