const SERVER_URL = "http://localhost:3000/api";
let visiblePets = 9;

// API Helper Functions
const fetchData = async () => {
	try {
		const response = await fetch(SERVER_URL);
		return await response.json();
	} catch (error) {
		console.error('Fetch error:', error);
		return [];
	}
};

const persistData = async (data) => {
	try {
		await fetch(SERVER_URL, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		});
	} catch (error) {
		console.error('Save error:', error);
	}
};

document.addEventListener("DOMContentLoaded", async () => {
    // Main initialization
    try {
        let petsData = await fetchData();
        
        // Display initial pets
        displayPets(petsData.slice(0, visiblePets));
        setupCreatePetForm(persistData);
        setupFilters(persistData);
        
    } catch (error) {
        console.error("Error initializing application:", error);
    }
});

// Display pets with API-compatible functions
async function displayPets(pets) {
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
                    <h5 class="card-title">${pet.name}</h5>
                    <p class="card-text">${pet.age} year old ${pet.sex} ${pet.breed}</p>
                    <button class="btn btn-danger delete-btn" data-id="${pet.animalID}">Delete</button>
                </div>
            </div>`;

        // Delete button functionality
        card.querySelector('.delete-btn').addEventListener('click', async (event) => {
			event.stopPropagation();
			try {
				const response = await fetch(`${SERVER_URL}/${pet.animalID}`, {
					method: 'DELETE'
				});
				
				if (response.status === 404) {
					throw new Error('Pet not found');
				}
				
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				
				const updatedData = await fetchData();
				displayPets(updatedData.slice(0, visiblePets));
			} catch (error) {
				console.error('Delete error:', error);
				alert(`Error deleting pet: ${error.message}`);
			}
		});

        petCards.appendChild(card);
    });

    setupLoadMoreButton();
}

// Filters with API support
function setupFilters(persistData) {
    document.getElementById('filterDogs').addEventListener('click', async () => {
        const data = await fetchData();
        filterPetsByType('Dog', data);
    });
    
    document.getElementById('filterCats').addEventListener('click', async () => {
        const data = await fetchData();
        filterPetsByType('Cat', data);
    });
    
    document.getElementById('filterAll').addEventListener('click', async () => {
        const data = await fetchData();
        displayPets(data.slice(0, visiblePets));
    });
}

function filterPetsByType(type, data) {
    const filteredPets = data.filter(pet => pet.type.toLowerCase() === type.toLowerCase());
    displayPets(filteredPets);
}

// Pet creation with API support
function setupCreatePetForm(persistData) {
    document.getElementById('createPetForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const newPet = {
        name: document.getElementById('petName').value,
        type: document.getElementById('petType').value,
        breed: document.getElementById('petBreed').value,
        sex: document.getElementById('petGender').value,
		color: "Cream",
      	spayedNeutered: "Yes",
        age: document.getElementById('petAge').value,
        animalID: Date.now(),
        microchipNumber: document.getElementById('petMicrochip').value,
        image: document.getElementById('petImage').files[0]?.name || 'default-pet.png',
		status: [
			"Health checked",
			"Vaccinations up to date",
			"Regularly dewormed",
			"Microchipped"
		],
        about: "Newly added pet"
    };

    try {
		const response = await fetch(SERVER_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newPet)
		});
	
		if (!response.ok) throw new Error('Failed to add pet');
		
		const createdPet = await response.json();
		const currentPets = await fetchData();
		displayPets([...currentPets, createdPet].slice(0, visiblePets));
		
		// Reset form
		document.getElementById('createPetForm').reset();
		document.getElementById('previewImage').style.display = 'none';
		const modal = bootstrap.Modal.getInstance(document.getElementById('createPetModal'));
		modal.hide();
		
	} catch (error) {
		console.error('Create error:', error);
		alert('Failed to add pet. Please try again.');
	}
});

    // Image preview handler remains the same
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

// Volunteer form remains unchanged
document.getElementById("volunteerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("volunteerName").value;
    const email = document.getElementById("volunteerEmail").value;
    const reason = document.getElementById("volunteerReason").value;

    if (name && email && reason) {
        console.log("Volunteer Signed Up:", { name, email, reason });
        alert(`Thank you, ${name}! ❤️\nWe appreciate your willingness to help!`);
        document.getElementById("volunteerForm").reset();
    }
});

// Load more button
function setupLoadMoreButton() {
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    loadMoreContainer.innerHTML = '';

    fetchData().then(data => {
        if (visiblePets < data.length) {
            const loadMoreBtn = document.createElement('button');
            loadMoreBtn.id = 'loadMore';
            loadMoreBtn.className = 'btn btn-primary mt-3';
            loadMoreBtn.innerText = 'Load More';
            loadMoreBtn.addEventListener('click', async () => {
                visiblePets += 9;
                const updatedData = await fetchData();
                displayPets(updatedData.slice(0, visiblePets));
            });
            loadMoreContainer.appendChild(loadMoreBtn);
        }
    });
}
