import {useState, useEffect} from 'react';

import axios from "axios";

export const useGetCategories = (categorieOption, render = undefined) => {
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        let API = `https://fakestoreapi.com/products/category/${categorieOption}`;
        axios.get(API)
            .then(response => setCategoriesData(response.data))
            .catch(e => console.warn(e));
        
        return undefined;
    }, [render]);

    return { categoriesData };
};