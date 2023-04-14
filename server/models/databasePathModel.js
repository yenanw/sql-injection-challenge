const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// schema for the positions collection
const databasePathSchema = new Schema(
  {
    challenge_number: {
      type: Number,
      required: true,
    },
    database_file_path: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DatabasePath", databasePathSchema, "database_paths");
