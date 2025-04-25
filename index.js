const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { calculatePoints } = require('./utils/score');

const app = express();
app.use(express.json());

const receipts = {};

// POST /receipts/process
app.post('/receipts/process', (req, res) => {
    const receipt = req.body;
    const id = uuidv4();
    const points = calculatePoints(receipt); // logic to be added tomorrow
    receipts[id] = points;
    res.status(200).json({ id });
});

// GET /receipts/:id/points
app.get('/receipts/:id/points', (req, res) => {
    const id = req.params.id;
    if (receipts[id] !== undefined) {
        res.status(200).json({ points: receipts[id] });
    } else {
        res.status(404).json({ error: 'Receipt not found' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
