// import conectarBD from "../db/db";
// import { Enum_EstadoInscripcion } from "../models/enums";
// import { InscriptionModel } from '../models/inscription';

// const main = async () => {
//     await conectarBD();

// // OBTENER LAS SOLICITUDES
//     await InscriptionModel.find({ proyecto : "61970e9f1620bc14cb3fa7c8" })
//       .then((u) => {
//         console.log('solicitudes de proyectos que lidera', u);
//       })
//       .catch((e) => {
//         console.error('error al buscar las solicitudes de los proyectos que lidera', e);
//       });

// // EDITAR EL ESTADO DE UNA SOLICITUD
//     await InscriptionModel.findOneAndUpdate(
//       { id: "61971cddec6ca7488a9fb46c" },
//       {
//         estado: Enum_EstadoInscripcion.rechazada,
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