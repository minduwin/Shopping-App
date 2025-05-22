import '../styles/cards.css'
import { Link } from 'react-router-dom';

export default function Cards({ item, handleClick, addToWishList }) {
    const { image, id, title, price } = item;

    return (
        <div className="products">
            <Link to={`/Details/${id}`}>
                <div className="itemImage">
                    <img src={image} alt="image" />
                </div>
            </Link>
            <div className="itemDesc">
                <p className='title'><span>{id}</span>{title}</p>
                <p className="price">${Math.floor(price)}</p>
            </div>              
            <div className='controlBtn'>    
                <button className='addBtn' onClick={() => handleClick(item)}>Add to Cart</button>
                <button 
                    className='favoriteBtn'
                    onClick={() => addToWishList(item)}
                >
                    <img src="./src/assets/wish.svg" alt="Favorite" />
                </button>
            </div>
        </div>
    )
}