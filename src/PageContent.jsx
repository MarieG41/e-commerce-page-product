import plus from './images/icon-plus.svg'
import minus from './images/icon-minus.svg'
import productOne from './images/image-product-1.jpg'
import productOneThumbNail from './images/image-product-1-thumbnail.jpg'
import productTwoThumbNail from './images/image-product-2-thumbnail.jpg'
import productThreeThumbNail from './images/image-product-3-thumbnail.jpg'
import productFourThumbNail from './images/image-product-4-thumbnail.jpg'
import cart from './images/icon-cart.svg'
import './page-content.css'
import { useState } from 'react'

export default function PageContent() {
    const [counter, setCounter] = useState(0);
    function countPlus() {
        setCounter(counter + 1)
    }
    function countMinus() {
        setCounter(counter - 1)
    }
    
    return (
        <main className='grid'>
            <div>
                <img className='product-main' src={productOne} alt="" />
                <div className='flex gallery-img'>
                    <img className='overlay active' src={productOneThumbNail} alt="" />
                    <img src={productTwoThumbNail} alt="" />
                    <img src={productThreeThumbNail} alt="" />
                    <img src={productFourThumbNail} alt="" />
                </div>
            </div>
            <div className='product-infos'>
                <p className='brand'>sneaker company</p>
                <h1 className='title'>Fall Limited Edition Sneakers</h1>

                <p className='product-description'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                <div className='new-price'>
                    <h2>$125.00</h2>
                    <span className='sales-nb'>50%</span>
                </div>
                <p className='old-price'>$250.00</p>

                <div className='flex-bis buttons'>
                    <div className='grey'>
                        <button className='grey' onClick={countMinus}><img src={minus} alt="" /></button>
                        <p className='grey'>{counter}</p>
                        <button className='grey' onClick={countPlus}><img src={plus} alt="" /></button>
                    </div>
                    <div>
                       <button className='orange'><img className='cart-img-btn' src={cart} alt="" />Add to cart</button> 
                    </div>
                </div>
            </div>
        </main>
    )
}