//usuarios
const usuarios = require("./usuariosSchema");
exports.getusuarios = (req, res) => {
  usuarios.find((err, usuarios) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(usuarios);
  });
};

exports.getusuarios = (req, res) => {
  let id = req.params.id;

  usuarios.find({ _id: id }, (err, usuarios) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(usuarios);
  });
};

exports.newusuarios = (req, res) => {
  const newusuarios = new usuarios(req.body);
  newusuarios.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newusuarios);
  });
};

exports.updateusuarios = (req, res) => {
  let nombre = req.body.nombre;
  usuarios.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteusuarios = (req, res) => {
  usuarios.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
