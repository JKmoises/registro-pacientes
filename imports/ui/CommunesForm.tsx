import React from 'react'
import { RegionProp } from '../api/RegionsCollection';

interface AppProps {
  communesByRegion: RegionProp;
}

export const CommunesForm = ({ communesByRegion }: AppProps) => {
  let { comunas: communes = []} = communesByRegion;

  return (
    <>
      <option value="" defaultValue="">
        Seleccione una comuna
      </option>

      {communes.map((commune, i) => (
        <option key={i} value={commune}>
          {commune}
        </option>
      ))}
    </>
  );
};
