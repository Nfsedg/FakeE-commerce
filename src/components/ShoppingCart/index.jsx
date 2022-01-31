import React, { useContext } from 'react';
import { ProductDetail } from './ProductDetail';
import { newContext }  from '../../context/newContext';
import style from './shoppingCart.module.css';

export const ShoppingCart = () => {
    const { itemCart, getTotalPrice } = useContext(newContext)

    return(
        <div className={style.wrapper}>
            <div>
                <p>Total: <span>{getTotalPrice(itemCart)}</span></p>
                <button>Checkout</button>
            </div>
            {
                itemCart.map(ele => (
                    <ProductDetail key={ele.productId} id={ele.productId} cuantity={ele.quantity}/>
                ))
            }
        </div>
    )
};