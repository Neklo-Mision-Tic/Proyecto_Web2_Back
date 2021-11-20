enum Enum_Rol {
  estudiante = 'estudiante',
  lider = 'lider',
  administrador = 'administrador',
}

enum Enum_EstadoUsuario {
  pendiente = 'pendiente',
  autorizado = 'autorizado',
  no_autorizado = 'no_autorizado',
}
  
  enum Enum_EstadoInscripcion {
    pendiente = 'pendiente',
    aceptada = 'aceptada',
    rechazada = 'rechazada',
  }

  enum Enum_EstadoProyecto {
    activo = 'activo',
    inactivo = 'inactivo',
  }
  
  enum Enum_FaseProyecto {
    iniciado = 'iniciado',
    desarrollo = 'desarrollo',
    terminado = 'terminado',
    nulo = '',
  }
  
  enum Enum_TipoObjetivo {
    general = 'general',
    especifico = 'especifico',
  }
  
  export {
    Enum_Rol,
    Enum_EstadoUsuario,
    Enum_EstadoInscripcion,
    Enum_EstadoProyecto, 
    Enum_FaseProyecto,
    Enum_TipoObjetivo
  };
  


