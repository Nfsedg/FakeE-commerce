import React, { useEffect } from 'react';
import axios from 'axios';

export const Products = () => {
    const [getProducts, setGetProducts] = React.useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setGetProducts(res.data);
            })
    }, [])


    return(
        <React.Fragment>
            <h1>Products</h1>
            {
                getProducts.map(ele => (
                    <div key={ele.id}>
                        {ele.title}
                    </div>
                ))
            }
        </React.Fragment>
    )
}