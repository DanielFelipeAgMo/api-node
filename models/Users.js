import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - nombresUsuario
 *         - celularUsuario
 *       properties:
 *         nombresUsuario:
 *           type: string
 *           description: Nombre del usuario.
 *         celularUsuario:
 *           type: number
 *           description: Número de celular del usuario.
 *       example:
 *         nombresUsuario: John Doe
 *         celularUsuario: 123456789
 */

const userSchema = mongoose.Schema({
    nombresUsuario: {
      type: String,
      require: true,
      trim: true
    },
    celularUsuario: {
      type: Number,
      require: true,
      trim: true
    }
},{
    timestamps: true
});

const Usuario = mongoose.model("Usuario", userSchema);
export default Usuario;


