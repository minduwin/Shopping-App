import { useState, useEffect } from 'react';
import '../styles/shop.css';
import Cards from './Cards';

export default function Shop({ handleClick, addToWishList }) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const apiUrl = 'https://fakestoreapi.com/products';

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(apiUrl);
            if(!response.ok) {
                throw new Error(`Error! Status: ${response.status}`)
            }
            const jsonData = await response.json();
            setData(jsonData);
            console.log(jsonData);
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (loading) {<h1>Loading...</h1>}
    if (error) {<h1>{error}</h1>}

    return (
        <div>
            <div className='container'>
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            <Cards item={item} handleClick={handleClick} addToWishList={addToWishList}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}