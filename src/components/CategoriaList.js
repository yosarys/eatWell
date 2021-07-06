import React from 'react';
import { FlatList } from 'react-native';
import { CateRecetas } from './InfoPantallas';

const CategoryData = ({ ListaCategoria }) => {
    return ( <
        FlatList data = { ListaCategoria.categories }
        numColumns = { "2" }
        keyExtractor = {
            (item) => item.strCategory }
        renderItem = {
            ({ item }) => {
                return ( <
                    CateRecetas titulo = { item.strCategory }
                    imagen = { item.strCategoryThumb }
                    />
                )
            }
        }
        />
    );
}
export default CategoryData;