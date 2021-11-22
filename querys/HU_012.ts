/* Entonces podré crear un nuevo proyecto

const proyectoCreado1 =  ProjectModel.create({
    nombre: 'Proyecto Mision TIC1',
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

*/