import { useEffect } from "react";
import '../styles/cart.css'

const Cart = ({ cart, setCart, handleChange }) => {

    const totalCart = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    const removeItem = (id) => {
        const newArr = cart.filter((item) => item.id !== id);
        setCart(newArr);
    }

    const cleanCart = () => {
        setCart([]);
    }

    useEffect(() => {
        totalCart();
    })
    
    return (
        <article>
            <div className="emptyCart">
                {cart.length === 0 && (
                    <div>No products were added.</div>
                )}
            </div>
            {
                cart?.map((item) => {
                    return (
                        <div className="cartBox" key={item.id}>
                            <div className="cartImg">
                                <img src={item.image} alt="Image" />
                                <p>{item.title}</p>
                            </div>
                            <div className="cartButtons">
                                <div className="addButtons">
                                    <button onClick={() => handleChange(item, +1)}>+</button>
                                    <button>{item.quantity}</button>
                                    <button onClick={() => handleChange(item, -1)}>-</button>
                                </div>
                                <div className="delButtons">
                                    <span>${Math.floor(item.price)}</span>
                                    <button onClick={() => removeItem(item.id)}>Remove</button>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
            <div className="checkBox">
                <div className="total">
                    <p>Total Price</p>
                    <span>${Math.floor(totalCart())}</span>
                </div>
                <div className="cleanButton">
                    <button onClick={() => cleanCart()}>Clean Cart</button>
                    <button>Checkout</button>
                </div>
            </div>
        </article>
    )
}

export default Cart;