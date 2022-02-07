import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCategories } from '../hooks/useGetCategories';
import { ItemCard } from '../components/ItemCard';
import style from './stlyes/productByCategory.module.css';

export const ProductsByCategorie = () => {
    const [render, setRender] = React.useState(false);
    let { category } = useParams();
    const { categoriesData } = useGetCategories(category, category);
    console.log('render')

    if(categoriesData.length <= 0) {
        return(
            <h1>loading</h1>
        )
    } else {
        return(
            <React.Fragment>
                <button onClick={() => setRender(!render)}>Render</button>
                <div className={style.categorieWrapper}>
                    {categoriesData.map(ele => (
                        <ItemCard key={ele.id} id={ele.id} img={ele.image} price={ele.price} title={ele.title} rate={ele.rating.rate}/>
                    ))}
                </div>
            </React.Fragment>
        );
    }
};