//this does only work with next projects
import getConfig from "next/config";

export const getEnv = (key: string): string | undefined => {
  const { publicRuntimeConfig } = getConfig();
  const publicKey = `NEXT_PUBLIC_${key}`;

  //trying 3 different methods
  const publicEnv = process?.env?.[publicKey];
  const realEnv = process?.env?.[key];
  const publicRuntimeEnv = publicRuntimeConfig[key];

  const unvalidatedEnv = publicEnv || realEnv || publicRuntimeEnv;

  return unvalidatedEnv;
};
