const mongoose = require('mongoose');
const courseSchema = require('../Schemas/courses.schema');

const Courses = mongoose.model("Courses" , courseSchema)

module.exports = Courses