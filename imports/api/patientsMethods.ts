import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { PatientsCollection } from '../db/PatientsCollection';


Meteor.methods({
  "patients.insert"(data) {
    check(data, {
      nombre: String,
      apellidoPaterno: String,
      apellidoMaterno: String,
      rut: String,
      region: String,
      comuna: String,
      codigoPostal: String,
    });

    PatientsCollection.insert(data);
  },

  "patients.remove"(patientId) {
    check(patientId,String);
    PatientsCollection.remove(patientId);
  },
});