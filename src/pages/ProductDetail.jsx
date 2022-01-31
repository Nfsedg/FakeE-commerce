import React, { Fragment, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProduct } from '../hooks/useGetProduct';
import { newContext } from '../context/newContext'
import style from './stlyes/productDetail.module.css';

export const ProductDetail = () => {
    const params = useParams();
    const { productData } = useGetProduct(params.itemId);
    const { dispatch, ACTIONS } = useContext(newContext);

    const handleClick = (id, price) => {
        dispatch({ type: ACTIONS.ADD_ITEM, payload: {
            "productId": id,
			"quantity": 1,
            "price": price
        }})
    }
    
    return(
        <Fragment>
            <div className={style.productDetail}>
                <section className={style.productInfo}>
                    <div>
                        <img src={productData.image} alt="" />
                    </div>
                    <div className={style.productInfoTitle}>
                        <h1>{productData.title}</h1>
                        <h2>${productData.price}</h2>
                        <div>
                            <button onClick={() => handleClick(productData.id, productData.price)}>Add to cart</button>
                        </div>
                    </div>
                </section>
                <section className={style.description}>
                    <div>
                        <h3>Description</h3>
                        <p>{productData.description}</p>
                    </div>
                </section>
            </div>
        </Fragment>
    )
};