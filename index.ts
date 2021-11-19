import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import { enumRol, enumEstadoUsuario } from "./models/enums";

const main = async () => {
  await conectarBD();

  //Código creación usuarios h1

  //   await UserModel.create({
  //     nombre: "Celia",
  //     apellido: "Lopez",
  //     correo: "test4@neklo.com",
  //     identificacion: 137,
  //     rol: enumRol.Estudiante
  //   })

  //     .then((u) => {
  //       console.log("usuario creado", u);
  //     })
  //     .catch((e) => {
  //       console.error("Error creando el usuario", e);
  //     });

  // // Codigo consulta total usuarios

  // await UserModel.find({})
  //   .then((u) => {
  //     console.log("users", u);
  //   })
  //   .catch((e) => {
  //     console.error("Error", e);
  //   });

  // Codigo consulta usuarios pendientes

  await UserModel.find({ estado: enumEstadoUsuario.pendiente})
    .then((u) => {
      console.log("users", u);
    })
    .catch((e) => {
      console.error("Error", e);
    });




};

main();
