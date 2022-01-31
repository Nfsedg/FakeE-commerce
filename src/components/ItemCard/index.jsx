import React from 'react';
import { Link } from 'react-router-dom';
import style from './itemCard.module.css';

export const ItemCard = ({img, price, title, rate, id}) => {
    return(

        <article className={style.cardWrapper}>
            <Link to={`/item/${id}`}>
                <div className={style.imageWrapper}>
                    <img src={img} alt={title} />
                    <div>Rate {rate}</div>
                </div>
            </Link>
            <div className={style.infoWrapper}>
                <h3>{title}</h3>
                <p><b>{price}</b></p>
            </div>
        </article>
    )
}