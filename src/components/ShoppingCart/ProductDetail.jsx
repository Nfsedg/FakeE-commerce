import React from 'react';
import { Link } from 'react-router-dom';
import { useGetProduct } from '../../hooks/useGetProduct';
import style from './productDetail.module.css';

export const ProductDetail = ({ id, cuantity }) => {
    const { productData } = useGetProduct(id)

    return(
        <div className={style.wrapperProduct}>
            <Link to={`/item/${id}`}>
                <img src={productData.image} alt="" />
            </Link>
            <div>
                <h3>{productData.title}</h3>
                <p>$ {productData.price}</p>
                <p>
                    Items: {cuantity}
                </p>
            </div>
        </div>
    )
};