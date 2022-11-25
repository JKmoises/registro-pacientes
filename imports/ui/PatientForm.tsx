import { useTracker } from 'meteor/react-meteor-data';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import styled from 'styled-components';
import { PatientProp } from '../api/PatientsCollection';
import { RegionsCollection, RegionProp } from '../api/RegionsCollection';
import { CommunesForm } from './CommunesForm';
import { RegionsForm } from './RegionsForm';


interface FieldProps {
  isSpan?: boolean;
}


interface AppState {
  region: string;
}

const ContainerForm = styled.div`
  max-width: 40rem;
  width: 100%;
  padding: 1rem;

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

const Form = styled.form`
  display: grid;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Field = styled.div<FieldProps>`
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

const InputForm = styled.input`
  padding: 0.3rem 0 0.3rem 0.4rem;
  font-size: 1.1rem;
  border: 0;
  border-bottom: thin solid var(--gray-color);
  outline: none;
  transition:  border-bottom .3s ease-in-out;

  &:focus {
    border-bottom: thin solid var(--pink-color);
  }
`;

const SelectForm = styled(InputForm)`
  background-color: transparent;
`;

const BtnForm = styled.input.attrs({ type: "submit" })`
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

let initialRegion: AppState["region"] = "";

export const PatientForm = () => {
  const [region, setRegion] = useState<AppState["region"]>(initialRegion);
  const { register, handleSubmit } = useForm<PatientProp>();
  

  const regions: RegionProp[] = useTracker(() =>
    RegionsCollection.find(
      {},
      { fields: { nombreRegion: 1 }, sort: { rut: -1 } }
    ).fetch()
  );

  const communes: RegionProp =
    useTracker(() =>
      RegionsCollection.findOne(
        { nombreRegion: region },
        { fields: { nombreRegion: 0 } }
      )
    ) ?? {};
  

  const getCommunes: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    let regionName: string = e.target.value;

    setRegion(regionName);
  };

  const insertPatient: SubmitHandler<PatientProp> = (data) => {
    console.log(data);
  };


  return (
    <ContainerForm>
      <h1 className="title-form">Registro de paciente</h1>
      <p className="text-form">Ingrese datos del paciente, por favor:</p>
      <Form onSubmit={handleSubmit(insertPatient)}>
        <Field>
          <label>Rut:</label>
          <InputForm type="text" {...register("rut")} placeholder="Tu Rut..." />
        </Field>

        <Field>
          <label>Nombre:</label>
          <InputForm
            type="text"
            {...register("nombre")}
            placeholder="Tu Nombre..."
          />
        </Field>

        <Field>
          <label>Apellido Paterno:</label>
          <InputForm
            type="text"
            {...register("apellidoPaterno")}
            placeholder="Tu Apellido Paterno..."
          />
        </Field>

        <Field>
          <label>Apellido Materno:</label>
          <InputForm
            type="text"
            {...register("apellidoMaterno")}
            placeholder="Tu Apellido Materno..."
          />
        </Field>

        <Field isSpan>
          <label>Región:</label>
          <SelectForm
            {...register("region")}
            onChange={getCommunes}
            as="select"
          >
            <RegionsForm regions={regions} />
          </SelectForm>
        </Field>

        <Field isSpan>
          <label>Comuna:</label>
          <SelectForm {...register("comuna")} as="select">
            <CommunesForm communesByRegion={communes} />
          </SelectForm>
        </Field>

        <Field isSpan>
          <label>Código Postal:</label>
          <InputForm
            type="number"
            {...register("codigoPostal")}
            placeholder="Tu Código Postal..."
          />
        </Field>

        <BtnForm value="Registrar" />
      </Form>
    </ContainerForm>
  );
}
