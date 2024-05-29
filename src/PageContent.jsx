import plus from './images/icon-plus.svg'
import minus from './images/icon-minus.svg'
import productOne from './images/image-product-1.jpg'
import productOneThumbNail from './images/image-product-1-thumbnail.jpg'
import productTwoThumbNail from './images/image-product-2-thumbnail.jpg'
import productThreeThumbNail from './images/image-product-3-thumbnail.jpg'
import productFourThumbNail from './images/image-product-4-thumbnail.jpg'
import './page-content.css'

export default function PageContent() {
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
                <h1>Fall Limited Edition Sneakers</h1>

                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                <div className='new-price'>
                    <h2>$125.00</h2>
                    <span className='sales-nb'>50%</span>
                </div>
                <p className='old-price'>$250.00</p>

                <div className='flex'>
                    <button><img src={minus} alt="" /></button>
                    <p>0</p>
                    <button><img src={plus} alt="" /></button>
                    <button>Add to cart</button>
                </div>
            </div>
        </main>
    )
}