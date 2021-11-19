// import conectarBD from "../db/db";
// import { Enum_InscriptionStatus } from "../models/enums";
// import { InscriptionModel } from '../models/inscriptions';

// const main = async () => {
//   await conectarBD();

// // GENERAR UNA SOLICITUD
//   await InscriptionModel.create({
//     estado : Enum_InscriptionStatus.aceptada,
//     entryDate : new Date('2021/12/25'),
//     endDate : new Date('2022/11/25'),
//     project : "619685784fac5f8c7037f545",
//     student: "6195d905beaedc9b1a520181"
    
//   })
//   .then((u) => {
//     console.log('solicitud de inscripción generada exitosamente', u);
//   })
//   .catch((e) => {
//     console.error('error al generar la solicitud', e);
//   });

// };

// main();


// Historia de usuario: HU_020
// Como estudiante
// Dado que estoy viendo la lista de los proyectos registrados en la plataforma
// Cuando requiera inscribirme en un proyecto
// Entonces podré generar una solicitud de inscripción al proyecto