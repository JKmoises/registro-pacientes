import styled from "styled-components";


export const TdTable = styled.td`
  font-size: 1.1rem;
`;

export const BtnDelete = styled(TdTable)`
  padding: 0.5rem 1.5rem;
  background-color: var(--red-dark-color);
  color: var(--white-color);
  border: none;
  border-radius: 0.3rem;
  transition: opacity 0.3s ease-out;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;