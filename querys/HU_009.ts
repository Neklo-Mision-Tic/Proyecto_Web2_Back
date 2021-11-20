/* Entonces podré  actualizar la fase del  proyecto.
await ProjectModel.findByIdAndUpdate(
    { _id: '6198e94d7ce7d6cbdef7e787' },

    {
      fase: Enum_FaseProyecto.terminado
    }
  )
    .then((u) => {
      console.log("users", u);
    })
    .catch((e) => {
      console.error("Error", e);
    });


*/