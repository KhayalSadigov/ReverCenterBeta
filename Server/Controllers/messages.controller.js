let Messages = require("./../Models/messages.model");

const messageController = {
  getAll: async (req, res) => {
    try {
      let data = await Messages.find({});
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  },
  getOne: async (req, res) => {
    try {
      let { id } = req.params;
      let data = await Messages.findById(id);
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  },
  post: async (req, res) => {
    try {
      let newData = new Messages(req.body);
      newData.save();
      res.send(newData);
    } catch (error) {
      res.send(error);
    }
  },
  delete: async (req, res) => {
    try {
      let data = await Messages.findByIdAndDelete(req.params.id);
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  },
  update: async (req, res) => {
    try {
      let data = await Messages.findByIdAndUpdate(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = messageController;
