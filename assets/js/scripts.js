let visiblePets = 9;

document.addEventListener("DOMContentLoaded", () => {
  if (typeof petsData !== 'undefined') {
    displayPets(petsData.slice(0, visiblePets));
    setupCreatePetForm();
    setupFilters();
  } else {
    console.error("Error: petsData is not defined.");
  }
});

function displayPets(pets) {
  const petCards = document.getElementById('petCards');
  petCards.innerHTML = '';

  if (pets.length === 0) {
    petCards.innerHTML = `<p class="text-muted">No pets available in this category.</p>`;
    return;
  }

  pets.forEach((pet, index) => {
    const card = document.createElement('div');
    card.classList.add('col', 'pet-card');
    card.setAttribute('data-index', index);

    // Store pet data in local storage and navigate to details on click
    card.addEventListener('click', () => {
      localStorage.setItem('selectedPet', JSON.stringify(pet));
      window.location.href = 'detail.html';
    });

    card.innerHTML = `
      <div class="card h-100 shadow-sm border-0 cursor-pointer">
        <img src="images/${pet.image}" class="card-img-top rounded-top" alt="${pet.breed}">
        <div class="card-body text-center">
          <h5 class="card-title">${pet.breed}</h5>
          <p class="card-text">${pet.type}, ${pet.age} years old, ${pet.sex}</p>
          <button class="btn btn-danger delete-btn" data-index="${index}">Delete</button>
        </div>
      </div>`;

    // Delete button functionality
    card.querySelector('.delete-btn').addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent navigation when deleting
      const petIndex = event.target.getAttribute('data-index');
      petsData.splice(petIndex, 1);
      localStorage.setItem('petsData', JSON.stringify(petsData));
      displayPets(petsData.slice(0, visiblePets));
    });

    petCards.appendChild(card);
  });

  setupLoadMoreButton();
}


function setupLoadMoreButton() {
  const loadMoreContainer = document.getElementById('loadMoreContainer');
  loadMoreContainer.innerHTML = '';

  if (visiblePets < petsData.length) {
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.id = 'loadMore';
    loadMoreBtn.className = 'btn btn-primary mt-3';
    loadMoreBtn.innerText = 'Load More';
    loadMoreBtn.addEventListener('click', () => {
      visiblePets += 9;
      displayPets(petsData.slice(0, visiblePets));
    });
    loadMoreContainer.appendChild(loadMoreBtn);
  }
}

// Filters
function setupFilters() {
  document.getElementById('filterDogs').addEventListener('click', () => filterPetsByType('dog'));
  document.getElementById('filterCats').addEventListener('click', () => filterPetsByType('cat'));
  document.getElementById('filterAll').addEventListener('click', () => displayPets(petsData.slice(0, visiblePets)));
}

function filterPetsByType(type) {
  const filteredPets = petsData.filter(pet => pet.type.toLowerCase() === type.toLowerCase());
  displayPets(filteredPets);
}

// Handle pet creation form
function setupCreatePetForm() {
  document.getElementById('createPetForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const petName = document.getElementById('petName').value;
    const petAge = document.getElementById('petAge').value;
    const petBreed = document.getElementById('petBreed').value;
    const petType = document.getElementById('petType').value;
    const petGender = document.getElementById('petGender').value;
    const petMicrochip = document.getElementById('petMicrochip').value;
    const petImageInput = document.getElementById('petImage');
    let petImage = '';

    if (petImageInput.files.length > 0) {
      const file = petImageInput.files[0];
      const reader = new FileReader();
      
      reader.onload = function(e) {
        petImage = e.target.result;

        const newPet = {
          name: petName,
          age: petAge,
          breed: petBreed,
          type: petType,
          sex: petGender,
          microchipNumber: petMicrochip,
          image: petImage
        };

        petsData.push(newPet);
        localStorage.setItem('petsData', JSON.stringify(petsData));
        displayPets(petsData.slice(0, visiblePets));

        document.getElementById('createPetForm').reset();
        document.getElementById('previewImage').style.display = 'none';
        const modal = new bootstrap.Modal(document.getElementById('createPetModal'));
        modal.hide();
      };

      reader.readAsDataURL(file);
    } else {
      const newPet = {
        name: petName,
        age: petAge,
        breed: petBreed,
        type: petType,
        sex: petGender,
        microchipNumber: petMicrochip,
        image: ''
      };

      petsData.push(newPet);
      localStorage.setItem('petsData', JSON.stringify(petsData));
      displayPets(petsData.slice(0, visiblePets));

      document.getElementById('createPetForm').reset();
      document.getElementById('previewImage').style.display = 'none';
      const modal = new bootstrap.Modal(document.getElementById('createPetModal'));
      modal.hide();
    }
  });

  document.getElementById('petImage').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const previewImage = document.getElementById('previewImage');
        previewImage.src = e.target.result;
        previewImage.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });
}
//Volunteer
document.getElementById("volunteerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  // Collect user input
  const name = document.getElementById("volunteerName").value;
  const email = document.getElementById("volunteerEmail").value;
  const reason = document.getElementById("volunteerReason").value;

  if (name && email && reason) {
    // Save the data (you can modify this to send to a database)
    const volunteerData = {
      name: name,
      email: email,
      reason: reason
    };

    console.log("Volunteer Signed Up:", volunteerData);

    // Show Thank You message
    alert(`Thank you, ${name}! ❤️\nWe appreciate your willingness to help!`);

    // Optionally, clear the form
    document.getElementById("volunteerForm").reset();
  }
});
