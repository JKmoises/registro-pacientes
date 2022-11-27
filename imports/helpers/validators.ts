import { validateRut } from "rutlib/lib";

export const rutValidator = (value: string): boolean => {

  return validateRut(value); 
}