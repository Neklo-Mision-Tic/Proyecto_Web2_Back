// import conectarBD from "../db/db";
// import { UserModel } from "../models/user";
// import { Enum_InscriptionStatus } from "../models/enums";

// const main = async () => {
//     await conectarBD();

// // EDITAR EL ESTADO DE UNA SOLICITUD
//     await UserModel.findOneAndUpdate(
//       { id: '12345' },
//       {
//         estado: Enum_EstadoInscripcion.aceptada,
//       }
//     )
//       .then((u) => {
//         console.log('estado de la solicitud actualizado', u);
//       })
//       .catch((e) => {
//         console.error('Error actualizando el estado de la solicitud', e);
//       });

// };

// main();


// // Historia de usuario: HU_016
// // Como líder
// // Dado que estoy viendo la lista de solicitudes de inscripción a los proyectos que lidero
// // Cuando requiera cambiar el estado a la solicitudes
// // Entonces podré aceptar o rechazar sus inscripciones