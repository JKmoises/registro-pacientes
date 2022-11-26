import React from "react";
import styled from "styled-components";
import { useTracker } from "meteor/react-meteor-data";
import { PatientProp, PatientsCollection } from "../api/PatientsCollection";
import { Patient } from "./Patient";
import Swal from "sweetalert2";

const TablePatiens = styled.table`
  display: inline-block;
  border-collapse: collapse;
  
  width: 100%;
  margin-bottom: 2rem;
  overflow-x: auto;

  & > thead {
    position: sticky;
    top: 0;
    background-color: var(--blue-color);
    color: var(--white-color);
  }

  & > tbody {
    tr {
      &:nth-child(odd) {
        background-color: var(--gray-color);
      }

      &:nth-child(even) {
        background-color: var(--gray-light-color);
      }
    }
  }

  th,
  td {
    padding: 0.5rem 1rem;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    width: auto;
    overflow-x: initial;
  }
`;

const ThTable = styled.th`
  font-size: 1.2rem;
  font-weight: 300;
  text-transform: uppercase;
`;

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
        PatientsCollection.remove(id);
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
            <ThTable colSpan={7}>No hay ningún paciente registrado, ingrese uno</ThTable>
          </tr>
        )}
      </tbody>
    </TablePatiens>
  );
};
