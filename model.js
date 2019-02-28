const url = 'mongodb://localhost:27017/treesfortravel';

const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true });

const flightSchema = new mongoose.Schema({
  origin: String,
  destination: String,
  distance: Number,
  carbonFootprint: Number,
  //treesToOffset: Array
})

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
