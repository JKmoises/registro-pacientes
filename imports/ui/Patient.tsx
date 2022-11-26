import React from 'react'
import { PatientProp } from '../api/PatientsCollection';
import { BtnDelete, TdTable } from './styles/PatientStyles';

interface AppProps {
  patient: PatientProp;
  deletePatient(id: string | undefined): void;
}


export const Patient = ({ patient, deletePatient }: AppProps) => {
  let {
    _id,
    rut,
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    region,
    comuna,
    codigoPostal,
  } = patient;

  return (
    <tr>
      <TdTable>{rut}</TdTable>
      <TdTable>{nombre}</TdTable>
      <TdTable>
        {apellidoPaterno} {apellidoMaterno}
      </TdTable>
      <TdTable>{region}</TdTable>
      <TdTable>{comuna}</TdTable>
      <TdTable>{codigoPostal}</TdTable>
      <TdTable>
        <BtnDelete onClick={() => deletePatient(_id)} as="button">
          Eliminar
        </BtnDelete>
      </TdTable>
    </tr>
  );
};
