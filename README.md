# Pet Shelter Management Application

## Overview

This is a pet shelter management application that allows users to browse, add, view, and delete pets. The application consists of a frontend built with HTML, CSS, and JavaScript, and a backend built with Node.js and Express.

## Features

- Browse available pets
- View detailed information about each pet
- Add new pets to the shelter
- Delete pets from the shelter
- Filter pets by type (dogs/cats)

## Project Structure

- `index.html` - Main landing page
- `detail.html` - Detailed view page for individual pets
- `server.js` - Backend server with API endpoints
- `data/` - Directory containing JSON files for pet data
- `images/` - Directory containing pet images
- `videos/` - Directory containing pet videos
- `assets/` - Directory containing additional website assets
- `api.rest` - Documentation of API endpoints

## Running the Application

### Prerequisites

- Node.js (v14 or higher)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

### Backend Setup

1. Navigate to the project directory:
   ```bash
   cd /path/to/project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

   You should see a message: "Server running on port 3000"

### Frontend Setup

You can run the frontend in two ways:

#### Option 1: Using a local server (recommended)

```bash
# Using Python 3
python -m http.server 8000

# Or using Node.js
npx serve
```

Then open your browser and go to `http://localhost:8000`

#### Option 2: Directly opening the HTML file

Simply double-click on the `index.html` file to open it in your browser.

## API Documentation

The application uses the following API endpoints:

- `POST /api/jsonBlob` - Create a new blob
- `GET /api/jsonBlob/{id}` - Get a blob by ID
- `PUT /api/jsonBlob/{id}` - Update a blob
- `DELETE /api/jsonBlob/{id}` - Delete a blob

For more details, see the `api.rest` file.

## Troubleshooting

If you encounter any issues:

1. Check the browser console (F12 or right-click > Inspect > Console) for error messages
2. Verify the backend server is running - you should see "Server running on port 3000" in the terminal
3. Check the data directory - make sure it exists and has write permissions
4. Verify API endpoints - try accessing `http://localhost:3000/api/jsonBlob` directly in your browser

## Team Members and Contributions

This project was completed by Oshan Maharjan and Denver Hogan.

- Backend implementation: Denver Hogan
- Frontend implementation: Oshan Maharjan
- API integration: Oshan Maharjan and Denver Hogan

### **Developed by:** Oshan Maharjan

---

## **Overview**

This project is a front-end web application designed to efficiently manage pet records in a shelter. It offers a digital platform for tracking and maintaining details of pets, such as their breed, age, health status, and adoption status. The application features a responsive main page displaying pet cards and a detailed page for individual pets.

---

## **Recent Updates**

### **Key Changes** 
- Replaced data.json with data.js: The project now loads pet data from a JavaScript file instead of a JSON file.
- Updated scripts.js: Adjusted the logic to directly access the petsData variable from data.js.
- Removed data.json: Since JavaScript natively supports object arrays, using a JSON file for static data was unnecessary.

### **Why Use data.js Instead of data.json?**
- Direct Variable Access: A JavaScript file (data.js) allows direct access to data as a global variable, eliminating the need for a fetch() request.
- Faster Load Time: By avoiding an asynchronous fetch operation, the page loads data immediately without waiting for an external request.
- Simplified Implementation: data.js allows for easier integration into JavaScript functions without requiring additional error handling for fetch failures.
- More Flexibility: With data.js, we can manipulate and modify pet data within the script dynamically.
---

## **Features**

### **Main Page**
- Displays pet records in a **responsive grid layout** with two rows and three cards per row.
- Each pet card contains:
  - Key details (e.g., name, type, age, and gender).
  - An image stored locally in the `images` folder.
  - Visual elements (e.g., labels or icons) to represent gender and age.
  - A **clickable link** to a detailed page for the pet.

### **Detail Page**
- A two-column layout displaying:
  - A **large image** of the pet.
  - Comprehensive pet details, including breed, gender, and microchip number.
  - A navigation button to return to the main page.

### **Interactive Features**
- **Search Functionality**: Dynamically search pets by breed.
- **Filtering**: Filter pets by type (dogs/cats).
- **Error Handling**: Displays a custom **"No Results Found"** message with a GIF when no pets match the search criteria.
- **Responsive Design**: Ensures a seamless user experience across all devices.

---

## **Technologies Used**

### **Front-End Development**
- **HTML5**: For semantic and structured content.
- **CSS3**: For layout, styling, and visual customization.
- **Bootstrap 5**: To ensure responsiveness and a consistent layout.
- **JavaScript**: For interactivity and dynamic content manipulation.

### **Licensing**
The project uses the **Apache License 2.0**, allowing you to use, modify, and distribute the code.

---

## **Video Walkthrough**


https://github.com/user-attachments/assets/1ed034c3-bb76-4f3b-9a2a-99d60937cab1


---




