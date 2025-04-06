// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('#contact form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: contactForm.querySelector('input[type="text"]').value,
        email: contactForm.querySelector('input[type="email"]').value,
        subject: contactForm.querySelector('input[placeholder="Subject"]').value,
        message: contactForm.querySelector('textarea').value,
        timestamp: new Date().toISOString()
      };
      
      // Save to JSON file
      saveContactData(formData);
      
      // Show success message
      showContactSuccess();
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Function to save contact data to JSON
  function saveContactData(data) {
    // In a real application, this would send data to a server
    // For this demo, we'll use localStorage to simulate saving
    
    // Get existing data or initialize empty array
    let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    
    // Add new contact
    contacts.push(data);
    
    // Save back to localStorage
    localStorage.setItem('contacts', JSON.stringify(contacts));
    
    // Log to console for demonstration
    console.log('Contact data saved:', data);
    console.log('All contacts:', contacts);
    
    // In a real application, you would send this to a server:
    /*
    fetch('/api/contacts', {
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
  function showContactSuccess() {
    // Create success message element
    const successMessage = document.createElement('div');
    successMessage.className = 'alert alert-success mt-3';
    successMessage.innerHTML = '<strong>Thank you!</strong> Your message has been sent successfully.';
    
    // Add to form
    const formContainer = document.querySelector('.contact-form');
    formContainer.appendChild(successMessage);
    
    // Remove after 5 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  }
}); 