let Posts = require("./../Models/posts.model");

const postController = {
  getAll: async (req, res) => {
    try {
      let data = await Posts.find({});
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  },
  getOne: async (req, res) => {
    try {
      let { id } = req.params;
      let data = await Posts.findById(id);
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  },
  post: async (req, res) => {
    try {
      let newData = new Posts(req.body);
      newData.save();
      res.send(newData);
    } catch (error) {
      res.send(error);
    }
  },
  delete: async (req, res) => {
    try {
      let data = await Posts.findByIdAndDelete(req.params.id);
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  },
  update: async (req, res) => {
    try {
      let data = await Posts.findByIdAndUpdate(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = postController;
