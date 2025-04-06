const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

// POST /api/jsonBlob - Create a new blob
app.post('/api/jsonBlob', (req, res) => {
    const id = Date.now().toString();
    const filePath = path.join(dataDir, `${id}.json`);
    
    fs.writeFileSync(filePath, JSON.stringify(req.body));
    
    res.setHeader('Location', `/api/jsonBlob/${id}`);
    res.status(201).json({ id });
});

// GET /api/jsonBlob/{id} - Get a blob by ID
app.get('/api/jsonBlob/:id', (req, res) => {
    const filePath = path.join(dataDir, `${req.params.id}.json`);
    
    if (fs.existsSync(filePath)) {
        const data = JSON.parse(fs.readFileSync(filePath));
        res.json(data);
    } else {
        res.status(404).json({ error: 'Blob not found' });
    }
});

// PUT /api/jsonBlob/{id} - Update a blob
app.put('/api/jsonBlob/:id', (req, res) => {
    const filePath = path.join(dataDir, `${req.params.id}.json`);
    
    if (fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify(req.body));
        res.status(200).json({ message: 'Updated successfully' });
    } else {
        res.status(404).json({ error: 'Blob not found' });
    }
});

// DELETE /api/jsonBlob/{id} - Delete a blob
app.delete('/api/jsonBlob/:id', (req, res) => {
    const filePath = path.join(dataDir, `${req.params.id}.json`);
    
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        res.status(200).json({ message: 'Deleted successfully' });
    } else {
        res.status(404).json({ error: 'Blob not found' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 