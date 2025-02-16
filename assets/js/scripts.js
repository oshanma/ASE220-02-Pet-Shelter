/* scripts.js */
let visiblePets = 9;

document.addEventListener("DOMContentLoaded", () => {
  if (typeof petsData !== 'undefined') {
    displayPets(petsData.slice(0, visiblePets));
  } else {
    console.error("Error: petsData is not defined.");
  }
});

function displayPets(pets) {
  const petCards = document.getElementById('petCards');
  petCards.innerHTML = '';
  
  pets.forEach((pet, index) => {
    const card = document.createElement('div');
    card.classList.add('col', 'pet-card');
    card.setAttribute('data-index', index);
    card.innerHTML = `
      <div class="card clickable-card">
        <img src="images/${pet.image}" class="card-img-top" alt="${pet.breed}">
        <div class="card-body">
          <h5 class="card-title">${pet.breed}</h5>
          <p class="card-text">${pet.type}, ${pet.age} years old, ${pet.sex}</p>
          <button class="btn btn-danger delete-btn" data-index="${index}">Delete</button>
        </div>
      </div>`;
    
    card.addEventListener('click', () => {
      localStorage.setItem('selectedPet', JSON.stringify(pet));
      window.location.href = 'detail.html';
    });
    
    petCards.appendChild(card);
  });

  document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation(); // Prevent triggering card click
      const petIndex = event.target.getAttribute('data-index');
      petsData.splice(petIndex, 1); // Remove pet from array
      localStorage.setItem('petsData', JSON.stringify(petsData)); // Update local storage
      displayPets(petsData.slice(0, visiblePets)); // Refresh display
    });
  });

  setupLoadMoreButton();
}

function setupLoadMoreButton() {
  const loadMoreContainer = document.getElementById('loadMoreContainer');
  loadMoreContainer.innerHTML = ''; // Clear previous button
  
  if (visiblePets < petsData.length) {
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.id = 'loadMore';
    loadMoreBtn.className = 'btn btn-secondary mt-3';
    loadMoreBtn.innerText = 'Load More';
    loadMoreBtn.addEventListener('click', () => {
      visiblePets += 9;
      displayPets(petsData.slice(0, visiblePets));
    });
    loadMoreContainer.appendChild(loadMoreBtn);
  }
}

function showModal(pet) {
  document.getElementById('modalPetImage').src = `images/${pet.image}`;
  document.getElementById('modalPetTitle').innerText = pet.breed;
  document.getElementById('modalPetAge').innerText = pet.age;
  document.getElementById('modalPetBreed').innerText = pet.breed;
  document.getElementById('modalPetGender').innerText = pet.sex;
  document.getElementById('modalPetMicrochip').innerText = pet.microchipNumber || 'N/A';
  document.getElementById('modalPetAbout').innerText = pet.about;
}

// Filter by category
function filterPetsByType(type) {
  const filteredPets = petsData.filter(pet => pet.type.toLowerCase() === type.toLowerCase());
  displayPets(filteredPets);
}

document.getElementById('filterDogs').addEventListener('click', () => filterPetsByType('dog'));
document.getElementById('filterCats').addEventListener('click', () => filterPetsByType('cat'));
document.getElementById('filterHome').addEventListener('click', () => displayPets(petsData.slice(0, visiblePets)));
