import { Schema, model, models } from "mongoose";
import { enumRol, enumEstadoUsuario } from "./enums";

interface User {
  correo: string;
  identificacion: string;
  nombre: string;
  apellido: string;
  rol: enumRol;
  estado: enumEstadoUsuario;
}

const userSchema = new Schema<User>({
  correo: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: "formato del correo electrónico invalido",
    },
  },
  identificacion: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
    enum: enumRol,
  },
  estado: {
    type: String,
    enum: enumEstadoUsuario,
    default: enumEstadoUsuario.pendiente,
  },
});

const UserModel = model("User", userSchema);

export { UserModel };
