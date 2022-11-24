import React from 'react'
import styled from 'styled-components';
import { useTracker } from 'meteor/react-meteor-data';
import { PatientProp, PatientsCollection } from "../api/PatientsCollection";
import { Patient } from './Patient';


const TablePatiens = styled.table`
  display: inline-block;
  border-collapse: collapse;
  border-radius: 0.5rem;
  width: 100%;
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
  }
`;


const ThTable = styled.th`
  font-size: 1.2rem;
  font-weight: 300;
  text-transform: uppercase;
`;


export const Patients = () => {
  const patients: PatientProp[] = useTracker(() => PatientsCollection.find({}).fetch()); 

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
        {patients.map((patient) => (
          <Patient key={patient._id} patient={patient} />
        ))}
      </tbody>
    </TablePatiens>
  );
}
