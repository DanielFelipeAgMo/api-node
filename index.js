import express from 'express';
import dotenv from 'dotenv';
import conectarBD from './config/db.js';

//Swagger
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.js';

//Importación de rutas
import usersRoutes from "./routes/usersRoutes.js"



//Iniciamos el servidor express
const app = express()
app.use(express.json())//para leer los datos en formato json

//Iniciamos variables del entorno
dotenv.config();

//Conectar a BD mongo
conectarBD();

//Routing del API
app.use("/api/users", usersRoutes);

//Ruta de la documentación
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerSpec))


//obtenemos una variable de entorno
const PORT = process.env.PORT || 3000

//Lanzando el API
app.listen(PORT,()=>{
  console.log(`Api escuchando en ${PORT} 😂`)
})

export default app;
