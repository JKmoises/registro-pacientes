import React from 'react'
import { PatientProp } from '../api/PatientsCollection';
import styled from 'styled-components';

interface AppProp {
  patient: PatientProp;
}

const TdTable = styled.td`
  font-size: 1.1rem;

`;

export const Patient = ({ patient }: AppProp) => {
  let {rut,nombre, apellidoPaterno,apellidoMaterno,region,comuna,codigoPostal} = patient;

  return (
    <tr>
      <TdTable>{rut}</TdTable>
      <TdTable>{nombre}</TdTable>
      <TdTable>{apellidoPaterno} {apellidoMaterno}</TdTable>
      <TdTable>{region}</TdTable>
      <TdTable>{comuna}</TdTable>
      <TdTable>{codigoPostal}</TdTable>
    </tr>
  );
};
