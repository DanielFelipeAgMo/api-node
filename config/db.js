import mongoose, { connect } from "mongoose";

const conectarBD = () => {
  const urlConexion = String(process.env.MONGO_URI);
  connect(urlConexion)
    .then(con => {
      console.log(`Conexión establecida con la base: ${urlConexion}`);
    })
    .catch(error => {
      console.log(error);
    });
};

export default conectarBD;
