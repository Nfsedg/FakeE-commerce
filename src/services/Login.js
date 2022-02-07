import axios from 'axios';

export const loginService = async credential => {
    const { data } = await axios.post('https://fakestoreapi.com/auth/login', credential)

    return data;
}