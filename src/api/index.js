const eatapi = "https://www.themealdb.com/api/json/v1/1/random.php";

export const fetcheatWell = async() => {
    try {
        const endpoint = eatapi;

        // Realizar la petición a la API. Esta petición debe ser asíncrona.
        const response = await fetch(endpoint);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return { count: 0 };
    }
};

export default fetcheatWell;