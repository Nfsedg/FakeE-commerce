import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetCart = () => {
    const [cartData, setCartData] = useState({})

    useEffect(() => {
        axios.get('https://fakestoreapi.com/carts/1', {
            "Access-Control-Allow-Origin": "*"
        })
            .then(response => setCartData(response.data))
            .catch(e => console.warn(e))
    }, [])
    return { cartData };
}