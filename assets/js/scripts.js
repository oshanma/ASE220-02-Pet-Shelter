let petsData = []; // To store the fetched pet data

// Fetch JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    petsData = data; // Store fetched data globally
    displayPets(data); // Display all pets initially
  })
  .catch(error => console.error('Error loading JSON:', error)); // Log an error if JSON fetching fails

// Function to display pets as cards
function displayPets(pets) {
  const petCards = document.getElementById('petCards');
  petCards.innerHTML = ''; // Clear existing content

  // Display a "No Results" message if no pets match the criteria
  if (pets.length === 0) {
    petCards.innerHTML = `
      <div class="d-flex flex-column align-items-center justify-content-center text-center" style="min-height: 300px;">
        <img src="images/dog.gif" alt="No Results Found" class="no-results-gif">
        <p class="no-results-text mt-3">No pets found matching your search. Please try again!</p>
      </div>
    `;
    return; // Exit the function
  }

  // Loop through each pet and create a card
  pets.forEach((pet, index) => {
    const card = `
      <div class="col">
        <div class="card">
          <img src="images/${pet.image}" class="card-img-top" alt="${pet.name}">
          <div class="card-body">
            <h5 class="card-title">${pet.breed}</h5>
            <p class="card-text">${pet.type}, ${pet.age} years old, ${pet.sex}</p>
            <button class="btn btn-primary view-details-btn" data-index="${index}">View Details</button>
          </div>
        </div>
      </div>
    `;
    petCards.innerHTML += card; // Add the card to the container
  });

  // Add event listeners to "View Details" buttons
  document.querySelectorAll('.view-details-btn').forEach(button => {
    button.addEventListener('click', event => {
      const petIndex = event.target.getAttribute('data-index'); // Get the index of the selected pet
      const selectedPet = pets[petIndex]; // Retrieve the selected pet data

      // Save the selected pet to localStorage
      localStorage.setItem('selectedPet', JSON.stringify(selectedPet));

      // Redirect to the detail page
      window.location.href = 'detail.html';
    });
  });
}

// Function to filter pets by type
function filterPetsByType(type) {
  if (type === 'all') {
    displayPets(petsData); // Display all pets
  } else {
    // Filter pets based on their type (dog/cat)
    const filteredPets = petsData.filter(pet => pet.type.toLowerCase() === type.toLowerCase());
    displayPets(filteredPets); // Display only the filtered pets
  }
}

// Add event listeners to navbar links for filtering
document.getElementById('filterDogs').addEventListener('click', () => filterPetsByType('dog'));
document.getElementById('filterCats').addEventListener('click', () => filterPetsByType('cat'));
document.getElementById('filterHome').addEventListener('click', () => filterPetsByType('all')); // Home link shows all pets

// Add search functionality to the Navbar search bar
document.getElementById('searchInput').addEventListener('input', (event) => {
  const searchTerm = event.target.value.toLowerCase(); // Convert input to lowercase
  const filteredPets = petsData.filter(pet =>
    pet.breed.toLowerCase().includes(searchTerm) // Match search term with pet breeds
  );
  displayPets(filteredPets); // Update displayed pets
});
