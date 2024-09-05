const mongoose = require('mongoose');

// Replace <db_password> with your actual password
mongoose.connect("mongodb+srv://dhanesha:dhanesha@docify.mn5lk.mongodb.net/docify?retryWrites=true&w=majority&appName=docify");

const docSchema = new mongoose.Schema({
  title: String,
  content: {
    type: String,
    default: ""
  },
  uploadedBy: String,
  date: {
    type: Date,
    default: Date.now
  },
  lastUpdate: {
    type: Date,
    default: Date.now
  }
});

// Check if the 'Document' model is already compiled, use it; otherwise, compile it
module.exports = mongoose.models.Document || mongoose.model('Document', docSchema);
