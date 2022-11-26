import { useTracker } from 'meteor/react-meteor-data';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import styled from 'styled-components';
import { PatientProp } from '../api/PatientsCollection';
import { RegionsCollection, RegionProp } from '../api/RegionsCollection';
import { CommunesForm } from './CommunesForm';
import { RegionsForm } from './RegionsForm';
import { PatientsCollection } from "../api/PatientsCollection";
import { AlertForm } from './AlertForm';
import Swal from 'sweetalert2';


interface FieldProps {
  isSpan?: boolean;
}


interface AppState {
  region: string;
}

const ContainerForm = styled.div`
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

const Form = styled.form`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  border-radius: .3rem;

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
  width: 100%;
  font-size: 1.1rem;
  border: 0;
  border-bottom: thin solid var(--gray-color);
  outline: none;
  transition:  border-bottom .3s ease-in-out;

  &:focus {
    border-bottom: 2px solid var(--pink-color);
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
  const { register,reset, formState: { errors }, handleSubmit } = useForm<PatientProp>();
  

  const regions: RegionProp[] = useTracker(() =>
    RegionsCollection.find(
      {},
      { fields: { nombreRegion: 1 }}
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
    // reset();
    PatientsCollection.insert(data);

    Swal.fire({
      title: "Registro ingresado correctamente",
      text: "El paciente ha sido registrado",
      icon: "success",
      timer: 4000,
    });
  };


  return (
    <ContainerForm>
      <h1 className="title-form">Registro de paciente</h1>
      <p className="text-form">Ingrese datos del paciente, por favor:</p>
      <Form onSubmit={handleSubmit(insertPatient)} className="box-shadow-1">
        <Field>
          <label>Rut:</label>
          <InputForm
            type="text"
            {...register("rut", { required: true })}
            placeholder="Tu Rut..."
          />
          {errors.rut?.type === "required" && (
            <AlertForm text="El RUT es obligatorio" />
          )}
        </Field>

        <Field>
          <label>Nombre:</label>
          <InputForm
            type="text"
            {...register("nombre", { required: true })}
            placeholder="Tu Nombre..."
          />
          {errors.nombre?.type === "required" && (
            <AlertForm text="El nombre es obligatorio" />
          )}
        </Field>

        <Field>
          <label>Apellido Paterno:</label>
          <InputForm
            type="text"
            {...register("apellidoPaterno", { required: true })}
            placeholder="Tu Apellido Paterno..."
          />
          {errors.apellidoPaterno?.type === "required" && (
            <AlertForm text="El apellido paterno es obligatorio" />
          )}
        </Field>

        <Field>
          <label>Apellido Materno:</label>
          <InputForm
            type="text"
            {...register("apellidoMaterno", { required: true })}
            placeholder="Tu Apellido Materno..."
          />
          {errors.apellidoMaterno?.type === "required" && (
            <AlertForm text="El apellido materno es obligatorio" />
          )}
        </Field>

        <Field isSpan>
          <label>Región:</label>
          <SelectForm
            onInput={getCommunes}
            {...register("region", { required: true })}
            as="select"
          >
            <RegionsForm regions={regions} />
          </SelectForm>
          {errors.region?.type === "required" && (
            <AlertForm text="La región es obligatoria" />
          )}
        </Field>

        <Field isSpan>
          <label>Comuna:</label>
          <SelectForm {...register("comuna", { required: true })} as="select">
            <CommunesForm communesByRegion={communes} />
          </SelectForm>
          {errors.comuna?.type === "required" && (
            <AlertForm text="La comuna es obligatoria" />
          )}
        </Field>

        <Field isSpan>
          <label>Código Postal:</label>
          <InputForm
            type="number"
            {...register("codigoPostal", { required: true })}
            placeholder="Tu Código Postal..."
          />
          {errors.codigoPostal?.type === "required" && (
            <AlertForm text="El código postal es obligatorio" />
          )}
        </Field>

        <BtnForm value="Registrar" />
      </Form>
    </ContainerForm>
  );
}
