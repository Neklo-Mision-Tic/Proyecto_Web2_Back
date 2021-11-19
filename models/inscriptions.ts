import { Schema, model } from 'mongoose';
import { Enum_InscriptionStatus } from './enums';
import { ProjectModel } from './project';
import { UserModel } from './user';

interface Inscription {
  estado: Enum_InscriptionStatus;
  entryDate: Date;
  endDate: Date;
  project: Schema.Types.ObjectId;
  student: Schema.Types.ObjectId;
}

const inscriptionSchema = new Schema<Inscription>({
  estado: {
    type: String,
    enum: Enum_InscriptionStatus,
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
    required: false,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: false,
  },
});

const InscriptionModel = model('Inscription', inscriptionSchema);

export { InscriptionModel };