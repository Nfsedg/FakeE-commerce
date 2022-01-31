import {useState, useEffect} from 'react';

import axios from "axios";

export const useGetCategories = (categorieOption, render = undefined) => {
    const [selectedCategorie, setSelectedCategorie] = useState("");
    const [categoriesData, setCategoriesData] = useState([]);

    let API = `https://fakestoreapi.com/products/category/${categorieOption}`;

    useEffect(() => {
        axios.get(API)
            .then(response => setCategoriesData(response.data))
            .catch(e => console.warn(e));
    }, [render]);

    return { categoriesData, setSelectedCategorie };
};