import { PatientProp, PatientsCollection } from "/imports/api/PatientsCollection";
import { Meteor } from 'meteor/meteor';
import { generateRut } from "rutlib/lib";

let patiens: PatientProp[] = [
  {
    nombre: "Jonathan",
    apellidoPaterno: "Adones",
    apellidoMaterno: "Torres",
    rut: generateRut(7,false),
    region: "Valparaíso",
    comuna: "Valparaíso",
    codigoPostal: 83000000
  },
];

const insertPatiens = (patient: PatientProp) => {
  let {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    rut,
    region,
    comuna,
    codigoPostal,
  } = patient;

  PatientsCollection.insert({
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    rut,
    region,
    comuna,
    codigoPostal,
  });
};

Meteor.startup(() => {
  if (PatientsCollection.find().count() === 0) {
    patiens.forEach(insertPatiens);
  }
});



