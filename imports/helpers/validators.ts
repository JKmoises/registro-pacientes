import { validateRut } from "rutlib/lib";

export const rutValidator = (value: string): boolean => {
  console.log(validateRut(value));
  return validateRut(value);
}