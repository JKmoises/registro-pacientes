import styled from "styled-components";

interface FieldProps {
  isSpan?: boolean;
}

export const ContainerForm = styled.div`
  max-width: 40rem;
  width: 90%;

  & > .title-form {
    text-align: center;
    font-weight: 900;
    color: var(--blue-dark-color);
    margin-bottom: 1rem;
  }

  & > .text-form {
    font-size: 1.2rem;
    padding-left: 0.4rem;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.3rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Field = styled.div<FieldProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > label {
    font-weight: 700;
    padding-left: 0.4rem;
    color: var(--blue-dark-color);
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    grid-column: ${({ isSpan }) => (isSpan ? "span 2" : "")};
    gap: 0.3rem;
  }
`;

export const InputForm = styled.input`
  padding: 0.3rem 0 0.3rem 0.4rem;
  width: 100%;
  font-size: 1.1rem;
  border: 0;
  border-bottom: thin solid var(--gray-color);
  outline: none;
  transition: border-bottom 0.3s ease-in-out;

  &:focus {
    border-bottom: 2px solid var(--pink-color);
  }
`;

export const SelectForm = styled(InputForm)`
  background-color: transparent;
`;

export const BtnForm = styled.input.attrs({ type: "submit" })`
  font-size: 1.3rem;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  background-color: var(--pink-color);
  color: var(--white-color);
  border: 0;
  border-radius: 0.5rem;
  transition: opacity 0.3s linear;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media screen and (min-width: 768px) {
    grid-column: 2 / 3;
    justify-self: end;
  }
`;
