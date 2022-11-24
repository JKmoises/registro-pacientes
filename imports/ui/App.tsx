import React from 'react';
import { GlobalStyle } from '../globalStyles';
import { Patients } from './Patients';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const App = () => {
  return (
    <Container>
      <GlobalStyle/>
      <Patients/>
    </Container>
  )
}
