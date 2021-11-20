import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol, Enum_EstadoUsuario } from "./models/enums";

const main = async () => {
  await conectarBD();

  //////////////////

  //Ingresar los datos de registro (Incluyendo elegir el rol al que aspiro) HU_01

    // await UserModel.create({
    //   correo: "test11@neklo.com",
    //   identificacion: 1345,
    //   password: "test124",
    //   nombre: "Gabriella",
    //   apellido: "Linares",      
    //   rol: enum_Rol.estudiante,
    // })

    //   .then((u) => {
    //     console.log("Usuario creado", u);
    //   })
    //   .catch((e) => {
    //     console.error("Error creando el usuario", e);
    //   });

  //////////////////////////

  //Podré ingresar mi correo y contraseña para ser validados HU_002

  //   await UserModel.find({
  //   $and: [
  //     { correo: "test10@neklo.com" },
  //     { password: "test123" },
  //   ],
  // })
  //   .then((u) => {
  //     console.log("Usuario autenticado", u);
  //   })
  //   .catch((e) => {
  //     console.error("Usuario o contraseña incorrecta", e);
  //   });

  //////////////////////////

  //Entonces podré ingresar los datos que deseo actualizar HU_003
  // await UserModel.findOneAndUpdate(
  //   { identificacion : "235" },
  //   {
  //     nombre: 'Juan',
  //     apellido: 'López',
  //   }
  // )
  //     .then((u) => {
  //       console.log("Usuario actualizado", u);
  //     })
  //     .catch((e) => {
  //       console.error("Error", e);
  //     });

  //////////////////////////

  // //Ver lista de los usuarios registrados en la plataforma (Tanto autorizados como no autorizados) HU_004
  // await UserModel.find({
  //   $or: [
  //     { estado: enumEstadoUsuario.pendiente },
  //     { estado: enumEstadoUsuario.autorizado },
  //   ],
  // })
  //   .then((u) => {
  //     console.log("Listado total de usuarios", u);
  //   })
  //   .catch((e) => {
  //     console.error("Error al listar usuarios", e);
  //   });

  ///////////////////////////

  //Cuando requiera aceptar un usuario en la plataforma Entonces podré cambiar el estado del usuario HU_005
  // await UserModel.findOneAndUpdate(
  //   { correo: "test14@neklo.com" },

  //   {
  //     estado: enumEstadoUsuario.autorizado,
  //   }
  // )
  //   .then((u) => {
  //     console.log("users", u);
  //   })
  //   .catch((e) => {
  //     console.error("Error", e);
  //   });

  //////////////////////////

  //Cuando requiera ver la lista de los estudiantes registrados en la plataforma (Tanto autorizados como no autorizados) HU_010
  // await UserModel.find({
  //   $or: [
  //     { estado: enumEstadoUsuario.autorizado },
  //     { estado: enumEstadoUsuario.noAutorizado },
  //   ],
  // })
  //   .then((u) => {
  //     console.log("List de usuarios", u);
  //   })
  //   .catch((e) => {
  //     console.error("Error", e);
  //   });

  
  ////////////////////////////

  //Podré cambiar el estado del estudiante de “Pendiente” a “Autorizado” HU_011

  // await UserModel.findOneAndUpdate(
  //   { correo: "test14@neklo.com" },

  //   {
  //     estado: enumEstadoUsuario.autorizado,
  //   }
  // )
  //   .then((u) => {
  //     console.log("users", u);
  //   })
  //   .catch((e) => {
  //     console.error("Error", e);
  //   });

  //////////////////////////
};

main();
