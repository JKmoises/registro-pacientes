import { Mongo } from 'meteor/mongo';

export interface Paciente {
  _id?: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  rut: string;
  region: string;
  comuna: string;
  codigoPostal: number;
}

export const PacientesCollection = new Mongo.Collection<Paciente>('pacientes');
