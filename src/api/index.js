import getEnvVars from "../../environment";

// Rutas de la API
const {RandomUrl,CategoriaUrl,FilterAUrl} = getEnvVars();

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

//Lista de categorias
export const ListaCategorias = async() => {
  try{
  const endpoint = CategoriaUrl;

  // Realizar la petición a la API. Esta petición debe ser asíncrona.
  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
  }catch (error) {
  console.log(error);
  return { count: 0 };
  }
};

//Filtrado areas
export const FilterArea = async() => {
  try{
  const endpoint = FilterAUrl;

  // Realizar la petición a la API. Esta petición debe ser asíncrona.
  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
  }catch (error) {
  console.log(error);
  return { count: 0 };
  }
};
