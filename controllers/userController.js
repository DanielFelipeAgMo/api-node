import Usuario from "../models/Users.js";

//Crear
const agregar = async (req, res) => {
  try {
      const usuario = new Usuario(req.body);
      const usuarioGuardado = await usuario.save();
      res.json({ body: usuarioGuardado, ok: "SI", msg: "Registro creado correctamente." });
  } catch (error) {
      console.log(error);
  }
}

//Leer
const listar = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
}

//Eliminar
const eliminar = async (req, res) => {
  //recibir los parametros por la url
  const { id } = req.params;
  //console.log(id);

  //validar si existe el Registro
  /* const usuario = await Usuario.findById(id);
  console.log(usuario);

  if (!usuario) {
      const error = new Error("Registro no encontrado.");
      return res.status(404).json({ msg: error.message, ok: "SI" });
  } */

  try {
      await Usuario.deleteOne({_id:id}); //findByIdAndDelete(id)
      res.json({ msg: "Registro eliminado correctamente.", ok: "SI" });
  } catch (error) {
      console.log(error);
  }
}
//Editar
const editar = async (req, res) => {
  //recibir los parametros por la url
  const { id } = req.params;
  //console.log(id);

  //validar si existe el Registro
  /* const usuario = await Usuario.findById(id);
  console.log(usuario); */

  if (req.body.nombresUsuario !== null && req.body.celularUsuario !== null) {
    //capturar los datos del formulario
      /* Usuario.nombresUsuario = req.body.nombresUsuario;
      Usuario.celularUsuario = req.body.celularUsuario; */

      try {
        const usuarioGuardado= await Usuario.updateOne({_id:id}, req.body);
        res.json({ body: usuarioGuardado, msg: "Registro actualizado correctamente.", ok: "SI" });
      } catch (error) {
        console.log(error);
      }
  }
  else{
    const error = new Error("no se han encontrado los parametros en el body.");
    return res.status(404).json({ msg: error.message, ok: "SI" });
  }
}

//Leer uno
const listarUno = async(req, res) => {
  //recibir los parametros por la url
  const { id } = req.params;
  //validar si existe el Registro
  const usuario = await Usuario.findById(id)

  if (!usuario) {
      const error = new Error("Registro no encontrado.");
      return res.status(404).json({ msg: error.message, ok: "SI" });
  }

  res.json(usuario);
}

export {
  agregar,
  listar,
  eliminar,
  editar,
  listarUno
}
