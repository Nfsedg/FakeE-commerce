import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillShop, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { useGetCategories } from '../../hooks/useGetCategories';
import { ProfileCard } from '../ProfileCard/';
import { ShoppingCart } from '../ShoppingCart';
import style from './header.module.css';

export const Header = () => {
    const [ showProfile, setShowProfile ] = useState(false);
    const [ showShoppingCart, setShowShoppingCart ] = useState(false);
    const { setSelectedCategorie } = useGetCategories()
    return(
        <header className={style.headerWrapper}>
            <div className={style.header}>
                {/* <img src="" alt="" /> */}
                <Link to='/'><AiFillShop/></Link>
                <nav>
                    <ul className={style.navOptions}>
                        <Link to={`/product/${"men's clothing"}`} onClick={() => setSelectedCategorie("men's clothing")}><li>Men's clothing</li></Link>
                        <Link to={`/product/${"women's clothing"}`}><li>Women's clothing</li></Link>
                        <Link to={`/product/${"electronics"}`}><li>Electronics</li></Link>
                        <Link to={`/product/${"jewelery"}`}><li>Jewelery</li></Link>
                    </ul>
                </nav>
                <div className={style.icons}>
                    <BiUser onClick={() => setShowProfile(!showProfile)}/>
                    
                    <AiOutlineShoppingCart onClick={() => setShowShoppingCart(!showShoppingCart)}/>
                </div>
                {showProfile && <ProfileCard/>}
                {showShoppingCart && <ShoppingCart/>}
            </div>
        </header>
    )
}