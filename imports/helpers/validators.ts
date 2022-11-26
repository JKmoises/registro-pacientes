import { cleanRut, validateRut } from "rutlib/lib";

export const rutValidator = (value: string): boolean => {
  let rut = cleanRut(value); 

  return validateRut(rut);
}