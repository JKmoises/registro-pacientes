import React from 'react'
import styled from 'styled-components';

interface AppProps {
  text: string;
}

const Alert = styled.div`
  background-color: var(--red-dark-alpha-color);
  padding: 0.4rem 0rem 0.4rem .6rem;
  border-left: 4px solid var(--red-dark-color);

  & > .alert-text {
    margin: 0;
    color: var(--red-dark-color);
    text-transform: uppercase;
    font-weight: 700;
    font-size: .8rem;
  }
`;

export const AlertForm = ({text}: AppProps) => {
  return (
    <Alert>
      <p className="alert-text">{text}</p>
    </Alert>
  );
}
