import productOne from './images/image-product-1.jpg'
import productTwo from './images/image-product-2.jpg'
import productThree from './images/image-product-3.jpg'
import productFour from './images/image-product-4.jpg'
// import productOneThumbNail from './images/image-product-1-thumbnail.jpg'
// import productTwoThumbNail from './images/image-product-2-thumbnail.jpg'
// import productThreeThumbNail from './images/image-product-3-thumbnail.jpg'
// import productFourThumbNail from './images/image-product-4-thumbnail.jpg'
import next from './images/icon-next.svg'
import prev from './images/icon-previous.svg'
//import close from './images/icon-close.svg'
import './light-box.css'
import { useState } from 'react'

export default function LightBox() {
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
        <div onClick={hideLightBox}>
            <div id="lightbox">{imageCards[0]}</div>
            <button onClick={showPrev}>{prev}</button>
            <img alt='' id="lightbox-img" src={imageToShow}></img>
            <button onClick={showNext}>{next}</button>
        </div>
       : ""
      }
       </> 
    )
}
