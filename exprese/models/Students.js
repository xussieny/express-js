const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true }
}, { timestamps: true });
// create a model
const Student =mongoose.model('Student', studentSchema);
module.exports = Student;