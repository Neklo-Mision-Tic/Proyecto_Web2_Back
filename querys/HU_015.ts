import conectarBD from "../db/db";
import { UserModel } from "../models/user";
import { Enum_InscriptionStatus } from "../models/enums";
import { ProjectModel } from "../models/project";
import { InscriptionModel } from '../models/inscriptions';

const main = async () => {
    await conectarBD();

// OBTENER LAS SOLICITUDES
    await InscriptionModel.find({ project : "619685784fac5f8c7037f545" })
      .then((u) => {
        console.log('solicitudes de inscripción encontradas', u);
      })
      .catch((e) => {
        console.error(e);
      });

};

main();


// Historia de usuario: HU_015
// Como líder
// Dado que ingresé al sistema de gestión de proyectos
// Cuando requiera revisar las solicitudes pendientes por aceptar o rechazar de estudiantes de inscripción a mis proyectos
// Entonces podré listar las solicitudes realizadas por los estudiantes.