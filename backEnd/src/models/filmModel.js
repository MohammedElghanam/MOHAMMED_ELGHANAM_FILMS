const mongoose = require('mongoose');
const filmSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseYear: { type: String, required: true },
  imageUrl: {type: String, required: true },
  videoUrl: {type: String, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
}, { timestamps: true });

module.exports = mongoose.model('Film', filmSchema);