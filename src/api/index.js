import getEnvVars from "../../environment";

const {RandomUrl,CategoriaUrl,FilterAUrl,FilterNameUrl} = getEnvVars();

export const fetcheatWell = async() => {
    try{
    const endpoint = RandomUrl;
  
    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
    }catch (error) {
    console.log(error);
    return { count: 0 };
    }
};

export const ListaCategorias = async() => {
  try{
  const endpoint = CategoriaUrl;
  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
  }catch (error) {
  console.log(error);
  return { count: 0 };
  }
};

export const FilterArea = async() => {
  try{
  const endpoint = `${FilterAUrl}${reg}`;
  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
  }catch (error) {
  console.log(error);
  return { count: 0 };
  }
};

export const BuscarRecetas = async () => {
  try {
    const endpoint = `${FilterNameUrl}${buscar}`;
    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

let reg;  
export const elergirReg = ({FiltroRegion}) => {
  reg = FiltroRegion;
}

let buscar;  
export const buscarNombre= ({FiltroBuscar}) => {
  buscar = FiltroBuscar;
}

