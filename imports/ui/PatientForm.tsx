import { useTracker } from "meteor/react-meteor-data";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CommunesForm } from "./CommunesForm";
import { RegionsForm } from "./RegionsForm";
import { AlertForm } from "./AlertForm";
import Swal from "sweetalert2";
// import { rutValidator } from "../helpers/validators";
import { BtnForm, ContainerForm, Field, Form, InputForm, SelectForm } from "./styles/FormStyles";
import { RegionProp, RegionsCollection } from '../db/RegionsCollection';
import { PatientProp } from '../db/PatientsCollection';
import { Meteor } from 'meteor/meteor';

interface AppState {
  region: string;
}

interface AppProps {
  patients: PatientProp[];
}

let initialRegion: AppState["region"] = "";

export const PatientForm = ({ patients }: AppProps) => {
  const [region, setRegion] = useState<AppState["region"]>(initialRegion);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<PatientProp>();

  const regions: RegionProp[] = useTracker(() =>
    RegionsCollection.find({}, { fields: { nombreRegion: 1 } }).fetch()
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
    const rutExist = patients.find(({ rut }) => rut === data.rut);
  
    if (rutExist) {
      Swal.fire({
        title: "El rut ingresado ya está registrado",
        text: "Ingrese un RUT que no esté registrado",
        icon: "error",
        timer: 5000,
      });

      return;
    }

    reset();
    Meteor.call("patients.insert", data);

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
      <p className="text-form">Ingrese datos del paciente, a continuación:</p>

      <Form onSubmit={handleSubmit(insertPatient)} className="box-shadow-1">
        <Field>
          <label>Rut:</label>
          <InputForm
            type="text"
            {...register("rut", {
              required: true,
              // validate: rutValidator,
              pattern: /^([0-9]{7,8})-[0-9kK]{1}$/,
            })}
            placeholder="Tu Rut (sin puntos, con guión)..."
          />
          {errors.rut?.type === "required" && (
            <AlertForm text="El RUT es obligatorio" />
          )}
          {errors.rut?.type === "pattern" && (
            <AlertForm text="El RUT no es válido" />
          )}
        </Field>

        <Field>
          <label>Nombre:</label>
          <InputForm
            type="text"
            {...register("nombre", {
              required: true,
              pattern: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/,
            })}
            placeholder="Tu Nombre..."
          />
          {errors.nombre?.type === "required" && (
            <AlertForm text="El nombre es obligatorio" />
          )}
          {errors.nombre?.type === "pattern" && (
            <AlertForm text="El nombre no es válido" />
          )}
        </Field>

        <Field>
          <label>Apellido Paterno:</label>
          <InputForm
            type="text"
            {...register("apellidoPaterno", {
              required: true,
              pattern: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/,
            })}
            placeholder="Tu Apellido Paterno..."
          />
          {errors.apellidoPaterno?.type === "required" && (
            <AlertForm text="El apellido paterno es obligatorio" />
          )}
          {errors.apellidoPaterno?.type === "pattern" && (
            <AlertForm text="El apellido paterno no es válido" />
          )}
        </Field>

        <Field>
          <label>Apellido Materno:</label>
          <InputForm
            type="text"
            {...register("apellidoMaterno", {
              required: true,
              pattern: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/,
            })}
            placeholder="Tu Apellido Materno..."
          />
          {errors.apellidoMaterno?.type === "required" && (
            <AlertForm text="El apellido materno es obligatorio" />
          )}
          {errors.apellidoMaterno?.type === "pattern" && (
            <AlertForm text="El apellido materno no es válido" />
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
            type="text"
            {...register("codigoPostal", {
              required: true,
              pattern: /^[0-9]{7}$/,
            })}
            placeholder="Tu Código Postal..."
          />

          {errors.codigoPostal?.type === "required" && (
            <AlertForm text="El código postal es obligatorio" />
          )}
          {errors.codigoPostal?.type === "pattern" && (
            <AlertForm text="El código postal debe tener 7 dígitos" />
          )}
        </Field>

        <BtnForm value="Registrar" />
      </Form>
    </ContainerForm>
  );
};
