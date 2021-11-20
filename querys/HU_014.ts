/* 
Entonces podré editar la información relacionada al proyecto cuya información necesito actualizar (Solamente puede actualizar: Nombre del proyecto, los objetivos generales, específicos y el presupuesto)
await ProjectModel.findOneAndUpdate({
    $and: [
      { _id: '6198e94d7ce7d6cbdef7e787' },
      { estado: Enum_EstadoProyecto.activo }
    ]},
    {
      nombre:"cambio de nombre2",
      objetivos: [
        { descripcion: 'Este es el objetivo general2', tipo: Enum_TipoObjetivo.general },
        { descripcion: 'Este es el objetivo especifico 3', tipo: Enum_TipoObjetivo.especifico },
        { descripcion: 'Este es el objetivo especifico 4', tipo: Enum_TipoObjetivo.especifico },
      ],
      presupues:124000  
    }
  )
    .then((u) => {
      console.log("Usuario autenticado", u);
    })
    .catch((e) => {
      console.error("Usuario o contraseña incorrecta", e);
    });


*/