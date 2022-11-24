import { PatientProp, PatientsCollection } from "/imports/api/PatientsCollection";
import { Meteor } from 'meteor/meteor';
import { patiens, regions } from "./data";
import { RegionProp, RegionsCollection } from "/imports/api/RegionsCollection";


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

const insertRegions = (region: RegionProp) => {
  let { nombreRegion, comunas } = region;
  
  RegionsCollection.insert({
    nombreRegion,
    comunas
  });
}

Meteor.startup(() => {
  if (PatientsCollection.find().count() === 0) {
    patiens.forEach(insertPatiens);
  }

  if (RegionsCollection.find().count() === 0) {
    regions.forEach(insertRegions);
  }
});



