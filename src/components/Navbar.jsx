import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar({ size, wishLength }) {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Shopping</h1>
            </div>
            <div className="nav_options">
                <ul>
                    <NavLink to='/'>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='/Shop'>
                        <li>Products</li>
                    </NavLink>
                    <NavLink to='/Wish'>
                        <div className='carty'>
                            <img src="./src/assets/wish.svg" alt="" />
                            <span>{wishLength}</span>
                        </div>
                    </NavLink>
                    <NavLink to='/Cart'>
                        <div className="carty">
                            <img src="./src/assets/shop-cart.svg" alt="cart" />
                            <span>{size}</span>
                        </div>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}