import { useEffect, useState } from 'react';
import axios from "axios";

export const useGetProduct = (categorieOption) => {
    const [productData, setproductData] = useState([]);

    let API = `https://fakestoreapi.com/products/${categorieOption}`;

    useEffect(() => {
        axios.get(API)
            .then(response => setproductData(response.data))
            .catch(e => console.warn(e));
    }, []);

    return { productData };
};