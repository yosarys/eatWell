import React from 'react';
import { FlatList} from 'react-native';
import CardSearch from '../components/CardResultado';

const SearchData = ({Resultados}) => {
    return ( 
    <FlatList
        data= {Resultados.meals}
        keyExtractor={(item)=>item.strMeal}
        renderItem={({item})=>{
            return(
               <CardSearch
                    titulo={item.strMeal}
                    imagen={item.strMealThumb}
                    instrucciones={item.strInstructions}
                    categoria={item.strCategory}
                    area={item.strArea}
                    video={item.strYoutube}
               />
            )
        }}
    />
     );
}
export default SearchData;

