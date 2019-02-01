//departamentos
const departamentos = require("./departamentosSchema");
exports.getdepartamentos = (req, res) => {
  departamentos.find((err, departamentos) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(departamentos);
  });
};

exports.getdepartamentos = (req, res) => {
  let id = req.params.id;

  departamentos.find({ _id: id }, (err, departamentos) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(departamentos);
  });
};

exports.newdepartamentos = (req, res) => {
  const newdepartamentos = new departamentos(req.body);
  newdepartamentos.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newdepartamentos);
  });
};

exports.updatedepartamentos = (req, res) => {
  let nombre = req.body.nombre;
  departamentos.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deletedepartamentos = (req, res) => {
  departamentos.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
