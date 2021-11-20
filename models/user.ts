import { Schema, model, models } from "mongoose";
import { enum_Rol, enum_EstadoUsuario } from "./enums";

interface User {
  correo: string;
  identificacion: string;
  password: string;
  nombre: string;
  apellido: string;
  rol: enum_Rol;
  estado: enum_EstadoUsuario;
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
  password: {
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
    enum: enum_Rol,
  },
  estado: {
    type: String,
    enum: enum_EstadoUsuario,
    default: enum_EstadoUsuario.pendiente,
  },
});

const UserModel = model("User", userSchema);

export { UserModel };
