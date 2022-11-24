import React from 'react';
import { GlobalStyle } from './styles/globalStyles';
import { Patients } from './Patients';
import styled from 'styled-components';
import { PatientForm } from './PatientForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <PatientForm/>
      <Patients/>
    </Container>
  )
}
