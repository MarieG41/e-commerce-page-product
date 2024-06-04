import plus from './images/icon-plus.svg'
import minus from './images/icon-minus.svg'
import productOne from './images/image-product-1.jpg'
import productOneThumbNail from './images/image-product-1-thumbnail.jpg'
import productTwoThumbNail from './images/image-product-2-thumbnail.jpg'
import productThreeThumbNail from './images/image-product-3-thumbnail.jpg'
import productFourThumbNail from './images/image-product-4-thumbnail.jpg'
import productTwo from './images/image-product-2.jpg'
import productThree from './images/image-product-3.jpg'
import productFour from './images/image-product-4.jpg'
import cart from './images/icon-cart.svg'
import './page-content.css'
import next from './images/icon-next.svg'
import prev from './images/icon-previous.svg'
import close from './images/icon-close.svg'
import { useState } from 'react'

export default function PageContent({ counter, setCounter }) {
    function countPlus() {
        setCounter(counter + 1)
    }
    function countMinus() {
        setCounter(counter - 1)
    }

    //lightbox
    const images = [productOne, productTwo, productThree, productFour]
    const [imageToShow, setImageToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    const imageCards = images.map((image) => (
        <img className="image-card" alt='' onClick={() => showImage(image)} src={image} />
      ));
      const showImage = (image) => {
        setImageToShow(image);
        setLightBoxDisplay(true);
      };
    const hideLightBox = () => {
        setLightBoxDisplay(false);
      };
     //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };
    //show next image in lightbox
    const showNext = (e) => {
        e.stopPropagation();
        let currentIndex = images.indexOf(imageToShow);
        if (currentIndex >= images.length - 1) {
          setLightBoxDisplay(false);
        } else {
          let nextImage = images[currentIndex + 1];
          setImageToShow(nextImage);
        }
      };
    return (
        <>
            {
                lightboxDisplay ? 
                <div id="lightbox">
                    <div className='close'><img src={close} alt="" onClick={hideLightBox}/></div>
                    <img className='prev' alt='' onClick={showPrev} src={prev}/>
                    <img className='next' alt='' onClick={showNext} src={next}/>  
                    <img alt='' id="lightbox-img" src={imageToShow}></img>
                    <div className='flex gallery-img'>{imageCards}</div>
                </div>
            : ""
            }
            <main className='grid'>
                <div>
                    <img src={prev} alt="" />
                    <img className='product-main' src={productOne} alt="" onClick={setLightBoxDisplay}/>
                    <img src={next} alt="" />
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
        </>
        
    )
}