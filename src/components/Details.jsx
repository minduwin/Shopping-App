import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/details.css'

export default function Details({ handleClick }){

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false)
        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
            <div>Loading...</div>
        )
    }

    const ShowProduct = () => {
        return (
            <div className="showProd">
                <div className="images">
                    <div className="mainImage">
                        <img src={product.image} alt="product" />
                    </div>
                    <div className="secImage">
                        <img src={product.image} alt="product" />
                        <img src={product.image} alt="product" />
                        <img src={product.image} alt="product" />
                        <img src={product.image} alt="product" />
                    </div>
                </div>
                <div className="prodInfo">
                    <div className="prodCategory">
                        <p>{product.category}</p>
                    </div>
                    <div className="prodTitle">
                        <h1>{product.title}</h1>
                    </div>
                    <div className="prodRate">
                        <p>Rating {product.rating && product.rating.rate}</p>
                        <img src="../src/assets/star.svg" alt="star" />
                    </div>
                    <div className="prodPrice">
                        <h3>${Math.floor(product.price)}</h3>
                    </div>
                    <div className="prodDesc">
                        <p>{product.description}</p>
                    </div>
                    <div className="detailBtn">
                        <button onClick={() => handleClick(product)}>Add to Cart</button>
                        <Link to='/Cart'>
                            <button>Go to Cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div>
                { loading ? <Loading /> : <ShowProduct />}
            </div>

        </div>
    )
}