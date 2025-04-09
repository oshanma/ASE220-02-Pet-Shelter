const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const DB_PATH = path.join(__dirname, 'data/db.json');


const getAllBlobs = () => {
    try {
        const data = fs.readFileSync(DB_PATH, 'utf8');
        return JSON.parse(data) || {};
    } catch (err) {
        return {};
    }
};

const saveAllBlobs = (blobs) => {
    fs.writeFileSync(DB_PATH, JSON.stringify(blobs, null, '\t'));
};

// Initialize 
if (!fs.existsSync(DB_PATH)) {
    saveAllBlobs({});
}

// POST 
app.post('/api/jsonBlob', (req, res) => {
    const blobs = getAllBlobs();
    const id = Date.now().toString();
    blobs[id] = req.body;
    saveAllBlobs(blobs);
    res.status(201)
       .setHeader('Location', `/api/jsonBlob/${id}`)
       .json({ id });
});

// GET 
app.get('/api/jsonBlob/:id', (req, res) => {
    const blobs = getAllBlobs();
    const blob = blobs[req.params.id];
    if (!blob) return res.status(404).json({ error: 'Blob not found' });
    res.json(blob);
});

// PUT /api/jsonBlob/:id - Update blob by ID
app.put('/api/jsonBlob/:id', (req, res) => {
    const blobs = getAllBlobs();
    if (!blobs[req.params.id]) return res.status(404).json({ error: 'Blob not found' });
    blobs[req.params.id] = req.body;
    saveAllBlobs(blobs);
    res.json({ success: true });
});

// DELETE /api/jsonBlob/:id - Delete blob by ID
app.delete('/api/jsonBlob/:id', (req, res) => {
    const blobs = getAllBlobs();
    if (!blobs[req.params.id]) return res.status(404).json({ error: 'Blob not found' });
    delete blobs[req.params.id];
    saveAllBlobs(blobs);
    res.status(204).end();
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
