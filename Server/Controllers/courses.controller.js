let Courses = require("./../Models/courses.model");

const courseController = {
  getAll: async (req, res) => {
    try {
      let data = await Courses.find({});
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  },
  getOne: async (req, res) => {
    try {
      let { id } = req.params;
      let data = await Courses.findById(id);
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  },
  post: async (req, res) => {
    try {
      let newData = new Courses(req.body);
      newData.save();
      res.send(newData);
    } catch (error) {
      res.send(error);
    }
  },
  delete: async (req, res) => {
    try {
      let data = await Courses.findByIdAndDelete(req.params.id);
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  },
  update: async (req, res) => {
    try {
      let data = await Courses.findByIdAndUpdate(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = courseController;
