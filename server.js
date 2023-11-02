const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/sneakerApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Sneaker = mongoose.model('Sneaker', {
    name: String,
    brand: String,
    price: Number,
    image: String,
});

app.get('/sneakers', async (req, res) => {
    const sneakers = await Sneaker.find();
    res.json(sneakers);
});

app.get('/sneakers/:id', async (req, res) => {
    const sneaker = await Sneaker.findById(req.params.id);
    res.json(sneaker);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
