enum Enum_Rol {
  Estudiante = 'Estudiante',
  Lider = 'Lider',
  Administrador = 'Administrador',
}

enum Enum_EstadoUsuario {
  pendiente = 'pendiente',
  autorizado = 'autorizado',
  no_autorizado = 'no_autorizado',
}
  
  enum Enum_ProjectStatus {
    ACTIVO = 'ACTIVO',
    INACTIVO = 'INACTIVO',
  }
  
  enum Enum_ProjectPhase {
    INICIADO = 'INICIADO',
    DESARROLLO = 'DESARROLLO',
    TERMINADO = 'TERMINADO',
    NULO = '',
  }
  
  enum Enum_ObjectiveType {
    GENERAL = 'GENERAL',
    ESPECIFICO = 'ESPECIFICO',
  }
  
  enum Enum_InscriptionStatus {
    aceptada = 'aceptada',
    rechazada = 'rechazada',
  }

  enum Enum_EstadoProyecto {
    ACTIVO = 'ACTIVO',
    INACTIVO = 'INACTIVO',
  }
  
  enum Enum_FaseProyecto {
    INICIADO = 'INICIADO',
    DESARROLLO = 'DESARROLLO',
    TERMINADO = 'TERMINADO',
    NULO = '',
  }
  
  enum Enum_TipoObjetivo {
    GENERAL = 'GENERAL',
    ESPECIFICO = 'ESPECIFICO',
  }
  
  export {
    Enum_Rol,
    Enum_EstadoUsuario,
    Enum_ProjectStatus,
    Enum_ProjectPhase,
    Enum_ObjectiveType,
    Enum_InscriptionStatus,
    Enum_EstadoProyecto, 
    Enum_FaseProyecto,
    Enum_TipoObjetivo
  };
  

