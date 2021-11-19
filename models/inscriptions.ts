import { Schema, model } from 'mongoose';
import { Enum_EstadoInscripcion } from './enums';
import { ProjectModel } from './project';
import { UserModel } from './user';

interface Inscription {
  estado: Enum_EstadoInscripcion;
  entryDate: Date;
  endDate: Date;
  project: Schema.Types.ObjectId;
  student: Schema.Types.ObjectId;
}

const inscriptionSchema = new Schema<Inscription>({
  estado: {
    type: String,
    enum: Enum_EstadoInscripcion,
    required: true,
  },
  entryDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const InscriptionModel = model('Inscription', inscriptionSchema);

export { InscriptionModel };