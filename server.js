const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const DB_PATH = path.join(__dirname, 'data/db.json');

// Helper function to read/write pets data
const getPets = () => {
    try {
        const data = fs.readFileSync(DB_PATH, 'utf8');
        return JSON.parse(data).pets || [];
    } catch (err) {
        return [];
    }
};

const savePets = (pets) => {
    fs.writeFileSync(DB_PATH, JSON.stringify({ pets }, null, '\t'));
};

// Initialize with empty array if db.json doesn't exist
if (!fs.existsSync(DB_PATH)) {
    savePets([]);
}

// API Endpoints
app.get('/api', (req, res) => {
    const pets = getPets();
    res.json(pets);
});

app.post('/api', (req, res) => {
    const pets = getPets();
    const newPet = {...req.body};
    pets.push(newPet);
    savePets(pets);
    res.status(201).json(newPet);
});

app.put('/api', (req, res) => {
    if (!Array.isArray(req.body)) {
      return res.status(400).json({ error: 'Expected array of pets' });
    }
    savePets(req.body);
    res.status(200).json(req.body);
  });
  

app.delete('/api/:animalID', (req, res) => {
    const pets = getPets();
    const animalID = parseInt(req.params.animalID);
    const filteredPets = pets.filter(pet => pet.animalID !== animalID);

    if (filteredPets.length === pets.length) {
        return res.status(404).json({ error: 'Pet not found' });
    }

    savePets(filteredPets);
    res.status(204).end();
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
