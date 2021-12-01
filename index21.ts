import conectarBD from "./db/db";
import { UserModel } from "./models/usuario/usuario";
import { Enum_Rol } from "./models/enums/enums";
import { ProjectModel } from "./models/proyecto/proyecto";

const main = async () => {
  await conectarBD();

  ProjectModel.create({
    nombre: "Proyecto aguas 1",
    presupuesto: 30000,
    fechaInicio: Date.now(),
    fechaFin: new Date("2022/11/10"),
  });
};
main();

// await UserModel.create({
//     apellido: "Loz",
//     correo: "oscolo@yahoo.com",
//     identificacion: 134,
//     nombre: "Rosa",
//     rol: Enum_Rol.Administrador,
//   })

//     .then((u) => {
//       console.log("usuario creado", u);
//     })
//     .catch((e) => {
//       console.error("Error creando el usuario", e);
