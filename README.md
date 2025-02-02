# Pet Website

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




