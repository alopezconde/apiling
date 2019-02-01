//pai
const pais = require("./paisSchema");
exports.getpais = (req, res) => {
  pais.find((err, pais) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(pais);
  });
};

exports.getpais = (req, res) => {
  let id = req.params.id;

  pais.find({ _id: id }, (err, pais) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(pais);
  });
};

exports.newpais = (req, res) => {
  const newpais = new pais(req.body);
  newpais.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newpais);
  });
};

exports.updatepais = (req, res) => {
  let nombre = req.body.nombre;
  pais.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deletepais = (req, res) => {
  pais.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
