import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import {Enum_Rol, Enum_EstadoUsuario} from './models/enums';

const main = async () => {
  await conectarBD();

  await UserModel.create({
    apellido: "Lozano",
    correo: "test1@neklo.com",
    identificacion: 134,
    nombre: "Rosa",
    rol: Enum_Rol.Administrador,
  })

    .then((u) => {
      console.log("usuario creado", u);
    })
    .catch((e) => {
      console.error("Error creando el usuario", e);
    });
};

main();
