import { Mongo } from 'meteor/mongo';

export interface PatientProp {
  _id?: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  rut: string;
  region: string;
  comuna: string;
  codigoPostal: number;
}

export const PatientsCollection = new Mongo.Collection<PatientProp>("patiens");
