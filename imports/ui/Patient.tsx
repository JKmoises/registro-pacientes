import React from 'react'
import { PatientProp } from '../api/PatientsCollection';
import styled from 'styled-components';

interface AppProps {
  patient: PatientProp;
}

const TdTable = styled.td`
  font-size: 1.1rem;
`;

const BtnDelete = styled(TdTable)`
  padding: .5rem 1.5rem;
  background-color: var(--red-dark-color);
  color: var(--white-color);
  border: none;
  border-radius: .3rem;
  transition: opacity .3s ease-out;
  
  &:hover{
    opacity: .8;
    cursor: pointer;
  }
  
`;

export const Patient = ({ patient }: AppProps) => {
  let {rut,nombre, apellidoPaterno,apellidoMaterno,region,comuna,codigoPostal} = patient;

  return (
    <tr>
      <TdTable>{rut}</TdTable>
      <TdTable>{nombre}</TdTable>
      <TdTable>{apellidoPaterno} {apellidoMaterno}</TdTable>
      <TdTable>{region}</TdTable>
      <TdTable>{comuna}</TdTable>
      <TdTable>{codigoPostal}</TdTable>
      <TdTable>
        <BtnDelete as="button">Eliminar</BtnDelete>
      </TdTable>
    </tr>
  );
};
