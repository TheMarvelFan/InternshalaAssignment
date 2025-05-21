# Internshala Assignment

A React-based application that displays and filters internship opportunities fetched from an API.

## Overview

This project creates a user-friendly dashboard to browse internship listings with filtering capabilities by profile, location, and duration. The application displays internship data fetched from a local API endpoint.

## Features

- View a list of internships with detailed information
- Filter internships by:
    - Profile/role
    - Location
    - Duration
- Search functionality
    - Search by profile name, location, or company name
- Toggle filter visibility
- Premium internship identification
- Responsive layout

## Project Structure

Here's a project structure in Markdown format that you can add to your README:


## Project Structure

```
internshala-assignment/
├── netlify                         # Netlify configuration
│   └── functions/                  # Netlify functions
│       └── internshala.js          # Serverless netlify function for fetching internship data
├── public/                         # Public assets
│   └── assets/                     # Static assets
│       └── InternshalaLogo.png     # Logo image
├── src/                            # Source code
│   ├── assets/                     # Static assets and images
│   │   └── InternshalaLogo.png     # Logo image
│   ├── components/                 # React components
│   │   ├── InternshipCard.jsx      # Card component for each internship
│   │   ├── SearchBar.jsx           # Search functionality component
│   │   ├── Filters.jsx             # Filter component
│   │   └── Header.jsx              # Header component
│   ├── hooks/                      # Custom React hooks
│   │   └── useInternships.js       # Hook for fetching and managing internship data
│   ├── pages/                      # Page components
│   │   └── HomePage.jsx            # Home page component
│   ├── server/                     # Local API server
│   │   ├── package.json            # Dependencies for the server
│   │   └── proxy-server.js         # Server entry point
│   ├── utils/                      # Utility functions
│   │   └── api.js                  # API request functions
│   ├── App.jsx                     # Main application component
│   ├── index.css                   # Global styles
│   └── main.jsx                    # Entry point for React
├── package.json                    # Frontend dependencies and project scripts
├── index.html                      # Template HTML file
├── vite.config.js                  # Vite configuration
└── README.md                       # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (14.x or higher)
- npm or yarn

### Installation

#### Development Environment

1. Clone the repository:
    ```bash
    git clone https://github.com/TheMarvelFan/InternshalaAssignment
    cd InternshalaAssignment
    ```
   
2. Install dependencies of the React application:
    ```bash
    npm install
    ```
   Then install dependencies of the API server:
    ```bash
    cd ./src/server
    npm install
    ```

3. Start the development server with both the React app and the API server:
    ```bash
    npm start
    ```
   
   Optionally, you can start the API server and the React Application separately.
   - To start the React application, go to the root directory of the project and run:
   ```bash   
   npm run dev
   ```
   - Then, in a separate terminal, run:
   ```bash
   cd ./src/server
   npm start
   ```

4. Open your browser and navigate to `http://localhost:5173` (or your default Vite port) to view the application.

The application connects to a local API running on port 5000:
- Endpoint: `http://localhost:5000/api/internshala`

#### Production Environment

1. Clone the repository:
    ```bash
    git clone https://github.com/TheMarvelFan/InternshalaAssignment
    cd InternshalaAssignment
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the netlify dev command to start a production-like environment:
    ```bash
    npm run netlify-dev
    ```
   
4. Open your browser and navigate to `http://localhost:8888` (or your default Netlify port) to view the application.

> The production build uses Netlify Dev to simulate a production environment. Ensure you have the Netlify CLI installed globally:
    <br>```
       npm install -g netlify-cli
    ```<br><br>
> You can also run the application in development mode using netlify. To do this:
> 1. Create a .env file in the root folder with the following content:
    <br>```
       VITE_DEV=true
    ```<br>
> 2. Run the following commands to start the express server:
    <br>```
       cd ./src/server
    ```
    <br>```
       npm install
    ```
     <br>```
       npm start
    ```<br>
> 3. In a separate terminal, run the following command from the root directory to start netlify dev:
    <br>```
       npm run netlify-dev
    ```<br>
> 4. To switch between dev and prod mode, you can set and unset the VITE_DEV variable in the .env file.<br>Leave it blank like so to run in production mode:
    <br>```
       VITE_DEV=
    ```<br>
    Set it to true (or any other value) to run in development mode:
    <br>```
       VITE_DEV=true
    ```<br>

## Usage

1. Browse the list of available internships
2. Click the filter button to show/hide filtering options
3. Select filters to narrow down the internship listings
4. Use the clear filters button to reset all filters
5. Use the search bar to find internships by profile name, location, or company name

## Technologies

- React
- JavaScript
- Fetch API
- React Hooks
- Tailwind CSS
- Express (for the API server)
