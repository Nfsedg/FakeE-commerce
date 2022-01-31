import React from 'react';
import { Slider } from '../components/Slider';
import { Outlet } from 'react-router-dom';
import style from './stlyes/home.module.css'

export const Home = () => {
    return(
        <main className={style.home}>
            <h2>Our Categories</h2>
            <Slider title={'Jewelery'} query={'jewelery?limit=5'}/>
            <Slider title={'Electronics'} query={'electronics?limit=5'}/>
            <Slider title={"Men's Clothing"} query={"men's clothing?limit=5"}/>
            <Slider title={"Women's Clothing"} query={"women's clothing?limit=5"}/>
            <Outlet/>   
        </main>
    )
}