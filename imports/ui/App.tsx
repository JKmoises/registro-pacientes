import React from 'react';
import { GlobalStyle } from './styles/globalStyles';
import { Patients } from './Patients';
import { PatientForm } from './PatientForm';
import { Container } from './styles/AppStyles';
import { PatientProp, PatientsCollection } from "../db/PatientsCollection";
import { useTracker } from "meteor/react-meteor-data";


export const App = () => {
   const patients: PatientProp[] = useTracker(() =>
    PatientsCollection.find({}, { sort: { rut: -1 } }).fetch()
   );
  

  return (
    <Container>
      <GlobalStyle />
      <PatientForm patients={patients} />
      <Patients patients={patients} />
    </Container>
  );
}
