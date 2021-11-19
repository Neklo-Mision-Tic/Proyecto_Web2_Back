// import conectarBD from "../db/db";
// import { Enum_InscriptionStatus } from "../models/enums";
// import { InscriptionModel } from '../models/inscription';

// const main = async () => {
//   await conectarBD();

// // GENERAR UNA SOLICITUD
//   await InscriptionModel.create({
//     estado : Enum_InscriptionStatus.aceptada,
//     fechaIngreso : new Date('2021/12/25'),
//     fechaEgreso : new Date('2022/11/25'),
//     proyecto : "619685784fac5f8c7037f545",
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