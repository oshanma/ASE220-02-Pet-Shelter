// Volunteer Form Handler
document.addEventListener('DOMContentLoaded', function() {
  const volunteerForm = document.getElementById('volunteerForm');
  
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('volunteerName').value,
        email: document.getElementById('volunteerEmail').value,
        reason: document.getElementById('volunteerReason').value,
        timestamp: new Date().toISOString()
      };
      
      // Save to JSON file
      saveVolunteerData(formData);
      
      // Show success message
      showVolunteerSuccess();
      
      // Reset form
      volunteerForm.reset();
    });
  }
  
  // Function to save volunteer data to JSON
  function saveVolunteerData(data) {
    // In a real application, this would send data to a server
    // For this demo, we'll use localStorage to simulate saving
    
    // Get existing data or initialize empty array
    let volunteers = JSON.parse(localStorage.getItem('volunteers') || '[]');
    
    // Add new volunteer
    volunteers.push(data);
    
    // Save back to localStorage
    localStorage.setItem('volunteers', JSON.stringify(volunteers));
    
    // Log to console for demonstration
    console.log('Volunteer data saved:', data);
    console.log('All volunteers:', volunteers);
    
    // In a real application, you would send this to a server:
    /*
    fetch('/api/volunteers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    */
  }
  
  // Function to show success message
  function showVolunteerSuccess() {
    // Create success message element
    const successMessage = document.createElement('div');
    successMessage.className = 'alert alert-success mt-3';
    successMessage.innerHTML = '<strong>Thank you!</strong> Your volunteer application has been submitted successfully.';
    
    // Add to form
    const formContainer = document.querySelector('#volunteer .container');
    formContainer.appendChild(successMessage);
    
    // Remove after 5 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  }
}); 