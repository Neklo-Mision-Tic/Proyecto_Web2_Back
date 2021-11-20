import { Schema, model } from 'mongoose';
import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from './enums';
import { UserModel } from './user';
import { InscriptionModel } from './inscription';
import { AvancesModel } from './avances';

interface Project {
  nombre: string;
  objetivos: [{ descripcion: String; tipo: Enum_TipoObjetivo }];
  presupuesto: number;
  fechaInicio: Date;
  fechaFin: Date;
  lider: Schema.Types.ObjectId;
  estado: Enum_EstadoProyecto;
  fase: Enum_FaseProyecto;
  inscripciones: [{ inscripcion: Schema.Types.ObjectId }];
  avances: Schema.Types.ObjectId;
}

const projectSchema = new Schema<Project>({
  nombre: {
    type: String,
    required: true,
  },
  objetivos: [
    {
      descripcion: {
        type: String,
        required: true,
      },
      tipo: {
        type: String,
        enum: Enum_TipoObjetivo,
        required: true,
      },
    },
  ],
  presupuesto: {
    type: Number,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  lider: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: UserModel,
  },
  estado: {
    type: String,
    enum: Enum_EstadoProyecto,
    default: Enum_EstadoProyecto.inactivo,
  },
  fase: {
    type: String,
    enum: Enum_FaseProyecto,
    default: Enum_FaseProyecto.nulo,
  },
  inscripciones:  [
    {
      inscripcion: {
        type: Schema.Types.ObjectId,
        // ref: InscriptionModel
      }
    },
  ],
  avances: {
    type: Schema.Types.ObjectId,
    // ref: AvancesModel
  }
  
  
});

const ProjectModel = model('Project', projectSchema);

export { ProjectModel };
