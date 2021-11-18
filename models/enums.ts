enum Enum_Rol {
    ESTUDIANTE = 'ESTUDIANTE',
    LIDER = 'LIDER',
    ADMINISTRADOR = 'ADMINISTRADOR',
  }
  
  enum Enum_UserStatus {
    PENDIENTE = 'PENDIENTE',
    AUTORIZADO = 'AUTORIZADO',
    NO_AUTORIZADO = 'NO_AUTORIZADO',
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
  
  enum Enum_ObjetiveType {
    GENERAL = 'GENERAL',
    ESPECIFICO = 'ESPECIFICO',
  }
  
  enum Enum_InscriptionStatus {
    aceptada = 'aceptada',
    rechazada = 'rechazada',
  }
  
  export {
    Enum_Rol,
    Enum_UserStatus,
    Enum_ProjectStatus,
    Enum_ProjectPhase,
    Enum_ObjetiveType,
    Enum_InscriptionStatus,
  };
  