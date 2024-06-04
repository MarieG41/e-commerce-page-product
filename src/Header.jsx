import logo from './images/logo.svg'
import cart from './images/icon-cart.svg'
import profile from './images/image-avatar.png'
import burgerMenu from './images/icon-menu.svg'
import './header.css'
import Thumbnail from './images/image-product-1-thumbnail.jpg'
import trash from './images/icon-delete.svg'
import { useState } from 'react'

export default function Header({ counter, setCounter }) {
    const [ cartInfos, setCartInfos ] = useState(false)
    const [ empty, setEmpty ] = useState(false)
    function emptyCart() {
        setEmpty((empty) => !empty)
    }
    function toggleCart() {
        setCartInfos((cartInfos) => !cartInfos)
    }
    function resetCart() {
        setCounter(0)
    }
    const calcul = 125 * counter
    return (
        <header>
            <img className='menu' src={burgerMenu} alt="" />
            <a href="/"><img className='logo' src={logo} alt="" /></a>
            <div className='menu-items'>
                <a href="/">Collections</a>
                <a href="/">Men</a>
                <a href="/">Women</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </div>
            <div className='cart-profile'>
                <img className='cart-img' src={cart} alt="" onClick={toggleCart} /><span className='notif-nb' onClick={emptyCart}>{counter}</span>
                <img className='mini' src={profile} alt="" />
            </div>

            {empty &&<div className="cart-previsualization">
                <h3>Cart</h3>
                <div className="empty-cart">
                    <p>You cart is empty</p>
                </div>
            </div>}
                {cartInfos && <div className="cart-previsualization">
                <h3>Cart</h3>
                <div className="cart-infos-price">
                    <img className='thumbnail' src={Thumbnail} alt="" />
                    <p className='title-cart'>Fall Limited Edition Sneakers</p>
                    <p className='results'>125 x {counter} <span className='bold'>$ {calcul}</span></p>
                    <img className='transh-can' src={trash} alt="" onClick={resetCart}/>
                </div>
                <button className='orange'><img className='cart-img-btn' src={cart} alt="" />Checkout</button> 
            </div>}
        </header>
        
    )
}