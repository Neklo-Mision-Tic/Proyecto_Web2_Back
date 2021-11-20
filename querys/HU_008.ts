/* 

await ProjectModel.findByIdAndUpdate(
    { _id: '6198e94d7ce7d6cbdef7e787' },

    {
      estado: Enum_EstadoProyecto.activo,
    }
  )
    .then((u) => {
      console.log("users", u);
    })
    .catch((e) => {
      console.error("Error", e);
    });

*/