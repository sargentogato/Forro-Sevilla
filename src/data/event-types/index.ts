import collab from "./collab.json";
import concerts from "./concerts.json";
import openAir from "./open-air.json";
import socialParties from "./social-parties.json";

export const eventTypeOptions = [
  socialParties,
  openAir,
  concerts,
  collab,
] as const;
export type EventTypeData = (typeof eventTypeOptions)[number];
