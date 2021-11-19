import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol, Enum_EstadoUsuario, Enum_TipoObjetivo, Enum_EstadoProyecto, Enum_FaseProyecto } from "./models/enums";
import { ProjectModel } from "./models/project";

const main = async () => {
  await conectarBD();

  //Código creación usuarios h1

    // await UserModel.create({
    //   nombre: "Leonor",
    //   apellido: "Mina",
    //   correo: "test3@neklo.com",
    //   identificacion: 136,
    //   rol: Enum_Rol.Estudiante,
    // })

    //   .then((u) => {
    //     console.log("usuario creado", u);
    //   })
    //   .catch((e) => {
    //     console.error("Error creando el usuario", e);
    //   });

  // Codigo consulta usuarios

  await UserModel.find()
    .then((u) => {
      console.log("users", u);
    })
    .catch((e) => {
      console.error("Error", e);
    });

///////////////////////////////////////////////////////////////////
  const proyectoCreado =  ProjectModel.create({
    nombre: 'Proyecto Mision TIC2',
    objetivos: [
      { descripcion: 'Este es el objetivo general', tipo: Enum_TipoObjetivo.general },
      { descripcion: 'Este es el objetivo especifico 1', tipo: Enum_TipoObjetivo.especifico },
      { descripcion: 'Este es el objetivo especifico 2', tipo: Enum_TipoObjetivo.especifico },
    ],
    presupuesto: 120000,
    fechaInicio: new Date('2021/12/24'),
    fechaFin: new Date('2022/12/24'),
    lider: "6195d905beaedc9b1a520181",
    estado: Enum_EstadoProyecto.activo,
    fase: Enum_FaseProyecto.iniciado
    
  });

  //const consultaProyectoConObjetivos3 = async () => {
  //const proyectoCreado = await ProjectModel.find({ id: '6196823d134083c6a58fb2f8' });
  //console.log('proyecto', proyectoCreado);
  //};

  ///////////////////////////////////////////////////////////////////////////////////////

};

main();
