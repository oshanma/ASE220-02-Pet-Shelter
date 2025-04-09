# Pet Website

### Developed by Oshan Maharjan and Denver Hogan

---

## **Overview**

This project is a front-end web application designed to efficiently manage pet records in a shelter. It offers a digital platform for tracking and maintaining details of pets, such as their breed, age, health status, and adoption status. The application features a responsive main page displaying pet cards and a detailed page for individual pets.

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
- **Search Functionality**: Dynamically search pets by name or breed.
- **Filtering**: Filter pets by type (dogs/cats) or adoption status.
- **Error Handling**: Displays a custom **"No Results Found"** message with a GIF when no pets match the search criteria.
- **Responsive Design**: Ensures a seamless user experience across all devices.

---

## **Technologies Used**

### **Front-End Development**
- **HTML5**: For semantic and structured content.
- **CSS3**: For layout, styling, and visual customization.
- **Bootstrap 5**: To ensure responsiveness and a consistent layout.
- **JavaScript (ES6+)**: For interactivity and dynamic content manipulation.

### **Backend Development**
- **Node.js**: For server-side scripting.
- **Express**: For building RESTful APIs.

---

## **Backend Setup**

### **Requirements**
- Node.js
- Express

### **Running the Backend**
1. Navigate to the project directory in your terminal.
2. Install the necessary dependencies by running:
   ```bash
   npm install
   ```
3. Start the server with the following command:
   ```bash
   node server.js
   ```
4. The server will be running on `http://localhost:3000`.

### **API Endpoints**
- **POST /api/jsonBlob**: Accepts a JSON object in the body and responds with a unique ID and Location header.
- **GET /api/jsonBlob/{id}**: Retrieves the JSON blob with the given ID.
- **PUT /api/jsonBlob/{id}**: Replaces the JSON blob with the new data in the request body.
- **DELETE /api/jsonBlob/{id}**: Deletes the specified blob.

---

## **Frontend Setup**

### **Running the Frontend**
1. Ensure the backend server is running.
2. Visit `http://localhost:3000` in your preferred web browser.

---

## **Team Members and Contributions**
- **Oshan Maharjan**: Developed the frontend and assisted with backend development.
- **Denver Hogan**: Integrated the backend API, ran testing, and implemented feature enhancements.

---

## **Additional Files**
- A `.rest` file is included to document the API endpoints and test them using a REST client.

---




