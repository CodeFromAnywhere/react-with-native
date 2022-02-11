//this does only work with next projects
import getConfig from "next/config";
export var getEnv = function (key) {
    var publicRuntimeConfig = getConfig().publicRuntimeConfig;
    var publicKey = "NEXT_PUBLIC_".concat(key);
    //trying 3 different methods
    var publicEnv = process.env[publicKey];
    var realEnv = process.env[key];
    var publicRuntimeEnv = publicRuntimeConfig[key];
    var unvalidatedEnv = publicEnv || realEnv || publicRuntimeEnv;
    return unvalidatedEnv;
};
//# sourceMappingURL=getEnv.js.map