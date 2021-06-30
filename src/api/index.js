import getEnvVars from "../../environment";

// Rutas de la API
const {RandomUrl,CategoriaUrl,RegionUrl,FilterNameUrl,FilterAUrl} = getEnvVars();

//Recetas Random
export const fetcheatWell = async() => {
    try{
    const endpoint = RandomUrl;

    // Realizar la petición a la API. Esta petición debe ser asíncrona.
    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
    }catch (error) {
    console.log(error);
    return { count: 0 };
    }
};