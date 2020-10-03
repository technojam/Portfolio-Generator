const mongoose = require("mongoose");
const Formschema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  skill: {
    type: [String],
    required: true,
  },
  photo: {
    type: [String],
    required: true,
  },
  projects: {
    text: [String],
    photo: { type: String },
    required: true,
  },

  contact: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Form", Formschema);
