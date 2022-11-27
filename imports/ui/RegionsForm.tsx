import React from 'react'
import { RegionProp } from '../db/RegionsCollection';

interface AppProps {
  regions: RegionProp[];
}

export const RegionsForm = ({ regions }: AppProps) => {
  return (
    <>
      <option value="" defaultValue="">Seleccione una región...</option>
      {regions.map(({ _id, nombreRegion }) => (
        <option key={_id} value={nombreRegion}>
          {nombreRegion}
        </option>
      ))}
    </>
  );
};
