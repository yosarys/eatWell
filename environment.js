import Constant from "expo-constants";
const ENV = {
    dev: {
        RandomUrl: "https://www.themealdb.com/api/json/v1/1/random.php",
        CategoriaUrl: "https://www.themealdb.com/api/json/v1/1/categories.php",
        RegionUrl: "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
        FilterNameUrl: "https://www.themealdb.com/api/json/v1/1/search.php?s=",
        FilterAUrl: "https://www.themealdb.com/api/json/v1/1/filter.php?a="
    },
    production: {
        RandomUrl: "https://www.themealdb.com/api/json/v1/1/random.php",
        CategoriaUrl: "https://www.themealdb.com/api/json/v1/1/categories.php",
        RegionUrl: "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
        FilterNameUrl: "https://www.themealdb.com/api/json/v1/1/search.php?s=",
        FilterAUrl: "https://www.themealdb.com/api/json/v1/1/filter.php?a="
    }
};

const getEnvVars = (env = Constant.manifest.releaseChannel) => {
    if (__DEV__) return ENV.dev;
    else if (env == "stoging") return ENV.dev;
    else if (env == "production" || env == "default") return ENV.production;
};

export default getEnvVars;