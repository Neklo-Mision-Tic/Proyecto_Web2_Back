import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol, Enum_EstadoUsuario, Enum_TipoObjetivo, Enum_EstadoProyecto, Enum_FaseProyecto } from "./models/enums";
import { ProjectModel } from "./models/project";

const main = async () => {
  await conectarBD();








/* 
  //Código creación usuarios h1

    // await UserModel.create({
    //   nombre: "Leonor",
    //   apellido: "Mina",
    //   correo: "test3@neklo.com",
    //   identificacion: 136,
    //   rol: Enum_Rol.estudiante,
    // })

    //   .then((u) => {
    //     console.log("usuario creado", u);
    //   })
    //   .catch((e) => {
    //     console.error("Error creando el usuario", e);
    //   });

  // Codigo consulta usuarios

 /* await UserModel.find()
    .then((u) => {
      console.log("users", u);
    })
    .catch((e) => {
      console.error("Error", e);
    });

///////////////////////////////////////////////////////////////////
*/
};

main();
