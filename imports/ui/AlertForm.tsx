import React from 'react'
import { Alert } from './styles/AlertStyles';

interface AppProps {
  text: string;
}

export const AlertForm = ({text}: AppProps) => {
  return (
    <Alert>
      <p className="alert-text">{text}</p>
    </Alert>
  );
}
