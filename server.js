const fs = require("fs");
const express = require("express");
const cors = require('cors');


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); 
app.use(cors());

// Serve index.html
app.get('/', (req, res) => {

    let filePath = "./public/index.html";

    if (fs.existsSync(filePath)) {
        let html = fs.readFileSync(filePath, 'utf8');
        res.send(html);
    } else {
        res.status(404).send("404 page not found");
    }
});

/* HTML ENDPOINTS */
app.get('/detail', (req, res) => {
    let filePath = "";
    res.send('HTML ENDPOINT: detail');
});

app.get('/html/landing', (req, res) => {
    let filePath = "./public/html/landing.html";

    if (fs.existsSync(filePath)) {
        let html = fs.readFileSync(filePath, 'utf8');
        res.send(html);
    } else {
        res.status(404).send("404 page not found");
    }
});

app.get('/html/courses', (req, res) => {
    let filePath = "./public/html/courses.html";

    if (fs.existsSync(filePath)) {
        let html = fs.readFileSync(filePath, 'utf8');
        res.send(html);
    } else {
        res.status(404).send("404 page not found");
    }
});


/* API ENDPOINTS */
app.get("/api", (req, res) => {
    let content = fs.existsSync("./data/db.json") ? JSON.parse(fs.readFileSync("./data/db.json", "utf8")) : {};
    res.json(content);
});

app.post("/api", (req, res) => {
    let content = req.body;
    fs.writeFileSync("./data/db.json", JSON.stringify(content, null, 2));
    res.json(content);
});

app.put("/api", (req, res) => {
    let content = req.body;
    fs.writeFileSync("./data/db.json", JSON.stringify(content, null, 2));
    res.json({ message: "Data updated", content });
});

app.delete("/api", (req, res) => {
    if (fs.existsSync("./data/db.json")) {
        fs.unlinkSync("./data/db.json");
    }
    res.json({ message: "Data deleted" });
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
