import styled from "styled-components";

export const TablePatiens = styled.table`
  display: inline-block;
  border-collapse: collapse;

  width: 100%;
  margin-bottom: 2rem;
  overflow-x: auto;

  & > thead {
    position: sticky;
    top: 0;
    background-color: var(--blue-color);
    color: var(--white-color);
  }

  & > tbody {
    tr {
      &:nth-child(odd) {
        background-color: var(--gray-color);
      }

      &:nth-child(even) {
        background-color: var(--gray-light-color);
      }
    }
  }

  th,
  td {
    padding: 0.5rem 1rem;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    width: auto;
    overflow-x: initial;
  }
`;

export const ThTable = styled.th`
  font-size: 1.2rem;
  font-weight: 300;
  text-transform: uppercase;
  
  &.no-patients {
    font-weight: 400;
  }
`;
