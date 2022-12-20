const mongoose  = require("mongoose")

const dashSchema = mongoose.Schema({
  name: String,
  score: Number,
});
const Dash = mongoose.model("gameuser", dashSchema);

module.exports = { Dash };
