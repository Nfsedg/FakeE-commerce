import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCategories } from '../../hooks/useGetCategories';
import style from './slider.module.css';

export const Slider = ({ query, title }) => {
    const { categoriesData } = useGetCategories(query);

    return(
        <section>
            <h2>{title}</h2>
            <div className={style.sliderItems}>
                {
                    categoriesData.map(ele => (
                        <Link to={`/item/${ele.id}`} key={ele.id}>
                            <div>
                                <img src={ele.image} alt={ele.title} />
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    );
};