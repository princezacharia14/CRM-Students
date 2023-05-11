const mongoose = require('mongoose');

const coop = new mongoose.Schema({
    courseName:{type: String, required:true, unique: true},
    courseDate:{type: Date, required:true },
    courseTime:{type: String, required: true},
});

const Coop = mongoose.model('coop', coop);
module.exports = Coop;