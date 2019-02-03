//departamentosSchema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const departamentosSchema = new Schema({

  nombre: String,
  region: String
});

module.exports = mongoose.model("departamentos",departamentosSchema);
