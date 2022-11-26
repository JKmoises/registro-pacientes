import React from 'react';
import { GlobalStyle } from './styles/globalStyles';
import { Patients } from './Patients';
import { PatientForm } from './PatientForm';
import { Container } from './styles/AppStyles';



export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <PatientForm/>
      <Patients/>
    </Container>
  )
}
