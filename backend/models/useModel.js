var mongoose = require('mongoose');

// Replace <db_password> with your actual password
mongoose.connect("mongodb+srv://dhanesha:dhanesha@docify.mn5lk.mongodb.net/docify?retryWrites=true&w=majority&appName=docify");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    username: String,
    isBlocked: {
      type: Boolean,
      default: false
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    date: {
      type: Date,
      default: Date.now
    }
});

// Check if the 'User' model is already compiled, use it; otherwise, compile it
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
