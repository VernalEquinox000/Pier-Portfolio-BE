const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  title: {
    type: String,
  },

  technologiesUsed: ["string"],
  description: {
    type: String,
  },
  instructions: {
    type: String,
  },
  demoURL: {
    type: String,
  },
  githubRepo: {
    type: String,
  },
  soloOrTeam: {
    enum: ["solo", "team"],
  },
  teamMembers: {
    type: String,
  },
});

module.exports = projectSchema;
