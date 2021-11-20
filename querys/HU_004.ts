  // //Ver lista de los usuarios registrados en la plataforma (Tanto autorizados como no autorizados) HU_004
  // await UserModel.find({
  //   $or: [
  //     { estado: enumEstadoUsuario.pendiente },
  //     { estado: enumEstadoUsuario.autorizado },
  //   ],
  // })
  //   .then((u) => {
  //     console.log("Listado total de usuarios", u);
  //   })
  //   .catch((e) => {
  //     console.error("Error al listar usuarios", e);
  //   });
