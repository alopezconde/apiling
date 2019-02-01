//usuariosSchema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({


	nombre1: String,
	nombre2: String,
	apellido1: String,
	apellido2: String,
	correo: String,
	contraseña: String
});

module.exports = mongoose.model("usuarios", usuariosSchema);
