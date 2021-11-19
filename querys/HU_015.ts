// import conectarBD from "../db/db";
// import { UserModel } from "../models/user";
// import { Enum_InscriptionStatus } from "../models/enums";
// import { ProjectModel } from "../models/project";
// import { InscriptionModel } from '../models/inscription';

// const main = async () => {
//     await conectarBD();

// // OBTENER LAS SOLICITUDES
//     await InscriptionModel.find({ estado : Enum_EstadoUsuario.pendiente })
//       .then((u) => {
//         console.log('solicitudes de inscripción encontradas', u);
//       })
//       .catch((e) => {
//         console.error('error al buscar la solicitud de inscripción', e);
//       });

// };

// main();


// Historia de usuario: HU_015
// Como líder
// Dado que ingresé al sistema de gestión de proyectos
// Cuando requiera revisar las solicitudes pendientes por aceptar o rechazar de estudiantes de inscripción a mis proyectos
// Entonces podré listar las solicitudes realizadas por los estudiantes.