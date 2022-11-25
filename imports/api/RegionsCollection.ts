import { Mongo } from "meteor/mongo";

export interface RegionProp {
  _id?: string;
  nombreRegion?: string;
  comunas?: string[];
}

export const RegionsCollection = new Mongo.Collection<RegionProp>("regions");
