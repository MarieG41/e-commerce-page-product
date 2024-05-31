import logo from './images/logo.svg'
import cart from './images/icon-cart.svg'
import profile from './images/image-avatar.png'
import burgerMenu from './images/icon-menu.svg'
import './header.css'

export default function Header() {
    return (
        <header>
            <img className='menu' src={burgerMenu} alt="" />
            <div className='menu-items'>
                <img className='logo' src={logo} alt="" />
                <a href="/">Collections</a>
                <a href="/">Men</a>
                <a href="/">Women</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </div>
            <div className='cart-profile'>
                <img className='cart-img' src={cart} alt="" />
                <img className='mini' src={profile} alt="" />
            </div>
        </header>
        
    )
}