import axios from 'axios';
import { useEffect, useState } from 'react';

export const useInitialState = () => {
    const [ token, setToken ] = useState({});

    useEffect(() => {
        axios.post('https://fakestoreapi.com/auth/login', {
            "username": "johnd",
	        "password": "m38rmF$"
        })
        .then(response => setToken(response.data))
        .catch(e => console.warn(e))
    }, [])

    return { token };
};