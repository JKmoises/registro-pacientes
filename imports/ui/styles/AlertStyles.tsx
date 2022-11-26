import styled from "styled-components";

export const Alert = styled.div`
  background-color: var(--red-dark-alpha-color);
  padding: 0.4rem 0rem 0.4rem 0.6rem;
  border-left: 4px solid var(--red-dark-color);

  & > .alert-text {
    margin: 0;
    color: var(--red-dark-color);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.8rem;
  }
`;
