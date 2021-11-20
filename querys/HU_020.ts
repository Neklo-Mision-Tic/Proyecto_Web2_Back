// import conectarBD from "../db/db";
// import { Enum_EstadoInscripcion } from "../models/enums";
// import { InscriptionModel } from '../models/inscription';
// // import { ProjectModel } from "../models/project";
// import { UserModel } from "../models/user";

// const main = async () => {
//   await conectarBD();

// // GENERAR UNA SOLICITUD
//   await InscriptionModel.create({
//     estado : Enum_EstadoInscripcion.pendiente,
//     fechaIngreso : new Date('2021/12/25'),
//     fechaEgreso : new Date('2022/11/25'),
//     proyecto : "6197b66585646e5844bab56c",
//     estudiante: "6195d905beaedc9b1a520181"
    
//   })
//   .then((u) => {
//     console.log('solicitud de inscripción generada exitosamente', u);
//   })
//   .catch((e) => {
//     console.error('error al generar la solicitud', e);
//   });

// };

// main();


// // Historia de usuario: HU_020
// // Como estudiante
// // Dado que estoy viendo la lista de los proyectos registrados en la plataforma
// // Cuando requiera inscribirme en un proyecto
// // Entonces podré generar una solicitud de inscripción al proyecto
