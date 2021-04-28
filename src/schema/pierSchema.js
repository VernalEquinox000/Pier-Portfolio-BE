const { Schema, model } = require("mongoose");

const PierSchema = new Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  location: {
    type: String,
  },
  about: {
    type: String,
  },
  experience: [
    {
      company: {
        type: String,
      },
      position: {
        type: String,
      },
      year: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
  education: [
    {
      school: {
        type: String,
      },
      title: {
        type: String,
      },
      skills: {
        type: String,
      },
    },
  ],
  languages: [
    {
      iSpeak: {
        type: String,
      },
      level: {
        type: String,
      },
    },
  ],
  hobbies: ["string"],
  learningNext: ["string"],
});

module.exports = PierSchema;
