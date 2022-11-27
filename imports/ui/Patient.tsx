import React from 'react'
import { BtnDelete, TdTable } from './styles/PatientStyles';
import { PatientProp } from '../db/PatientsCollection';

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
