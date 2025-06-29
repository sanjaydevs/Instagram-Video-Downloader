Instagram Video Downloader - Documentation

Overview

This project is a simple Instagram Video Downloader built with Node.js (Express) for the backend and React for the frontend.

Backend

Technology: Node.js, Express, Cheerio, Axios, CORS

Endpoints:

POST /api/download - Accepts an Instagram URL, scrapes the page, and returns the direct video link.

Key Libraries:

axios - Fetch HTML data.

cheerio - Parse HTML and extract video link.

cors - Enable cross-origin requests from the frontend.

Frontend

Technology: React, Bootstrap (for styling)

Components:

Header - Displays site name and navigation links.

App - Contains input for Instagram URL, download button, and video preview.

Footer - Displays copyright info.

Styling

Basic CSS and Bootstrap classes used for layout and component styling.

Global font and color schemes set in :root selector in CSS.

How to Run

Clone the repository.

Install backend dependencies in the root folder:

npm install

Run backend server:

node server.js

Navigate to frontend folder, install dependencies:

npm install

Run frontend dev server:

npm run dev

Future Improvements

Add error handling and user-friendly messages.

Validate Instagram URLs more robustly.

Improve UI with animations and responsive design.

Optionally allow direct download with one click.

Notes

The video scraping depends on Instagram page structure, which might break if Instagram updates their site.

Use responsibly and comply with Instagram's Terms of Service.
