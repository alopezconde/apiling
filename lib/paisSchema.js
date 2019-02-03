//paisSchema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paisSchema = new Schema({

  nombre: String  
});

module.exports = mongoose.model("pais", paisSchema);
