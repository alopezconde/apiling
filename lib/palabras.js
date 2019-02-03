//palabras
const palabras = require("./palabrasSchema");
exports.getpalabras = (req, res) => {
  palabras.find((err, palabras) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(palabras);
  });
};

exports.getpalabras = (req, res) => {
  let id = req.params.id;

  palabras.find({ _id: id }, (err, palabras) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(palabras);
  });
};

exports.newpalabras = (req, res) => {
  const newpalabras = new palabras(req.body);
  newpalabras.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newpalabras);
  });
};

exports.updatepalabras = (req, res) => {
  let nombre = req.body.nombre;
  palabras.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deletepalabras = (req, res) => {
  palabras.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
