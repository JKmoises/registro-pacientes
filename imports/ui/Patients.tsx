import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Patient } from "./Patient";
import Swal from "sweetalert2";
import { TablePatiens, ThTable } from "./styles/PatientsStyles";
import { PatientProp, PatientsCollection } from '../db/PatientsCollection';
import { Meteor } from 'meteor/meteor';


export const Patients = () => {
  const patients: PatientProp[] = useTracker(() =>
    PatientsCollection.find({}).fetch()
  );

  const deletePatient = (id: string) => {
    Swal.fire({
      title: "¿Estás seguro de borrar un paciente?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--blue-dark-color)",
      cancelButtonColor: "var(--red-dark-color)",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Meteor.call('patients.remove', id);

        // PatientsCollection.remove(id);


        Swal.fire({
          title: "Registro borrado con éxito",
          text: "El paciente ha sido eliminado",
          icon: "success",
          timer: 4000,
        });
      }
    });
  };

  return (
    <TablePatiens>
      <thead>
        <tr>
          <ThTable>Rut</ThTable>
          <ThTable>Nombre</ThTable>
          <ThTable>Apellidos</ThTable>
          <ThTable>Región</ThTable>
          <ThTable>Comuna</ThTable>
          <ThTable>Código Postal</ThTable>
          <ThTable>Acciones</ThTable>
        </tr>
      </thead>
      <tbody>
        {patients.length !== 0 ? (
          patients.map((patient) => (
            <Patient
              key={patient._id}
              patient={patient}
              deletePatient={deletePatient}
            />
          ))
        ) : (
          <tr>
            <ThTable colSpan={7} className="no-patients">
              No hay ningún paciente registrado, ingrese uno
            </ThTable>
          </tr>
        )}
      </tbody>
    </TablePatiens>
  );
};
