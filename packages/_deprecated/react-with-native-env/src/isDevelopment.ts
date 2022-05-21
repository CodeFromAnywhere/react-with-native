import { getEnv } from "./getEnv";

export const isDevelopment = () => {
  const isNodeEnvDev = getEnv("NODE_ENV") === "development";
  const isLocalhost =
    typeof window !== "undefined" &&
    window.location.href.startsWith("http://localhost");

  return isNodeEnvDev || isLocalhost;
};
