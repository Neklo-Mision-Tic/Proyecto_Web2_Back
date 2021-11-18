import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol, Enum_EstadoUsuario } from "./models/enums";

const main = async () => {
  await conectarBD();

  //Código creación usuarios h1

    // await UserModel.create({
    //   nombre: "Leonor",
    //   apellido: "Mina",
    //   correo: "test3@neklo.com",
    //   identificacion: 136,
    //   rol: Enum_Rol.Estudiante,
    // })

    //   .then((u) => {
    //     console.log("usuario creado", u);
    //   })
    //   .catch((e) => {
    //     console.error("Error creando el usuario", e);
    //   });

  // Codigo consulta usuarios

  await UserModel.find()
    .then((u) => {
      console.log("users", u);
    })
    .catch((e) => {
      console.error("Error", e);
    });
};

main();
