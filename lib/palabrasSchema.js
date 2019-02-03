//palabrasSchema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const palabrasSchema = new Schema({


	palabra: String,
      significado: String,
      imagen:String,

      "id_departamentos":{type:Schema.Types.ObjectId,
             ref: "departamentos"}
});

module.exports = mongoose.model("palabras",palabrasSchema);
