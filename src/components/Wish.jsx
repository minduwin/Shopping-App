import '../styles/wish.css'

export default function Wish({ wishList, setWishList }) {
    
    const removeWish = (id) => {
        const newList = wishList.filter((item) => item.id !== id)
        setWishList(newList);
    }

    const cleanWish = () => {
        setWishList([]);
    }
    
    return (
        <article>
            <div className="emptyList">
                {wishList.length === 0 && (
                    <div>Wish list is empty</div>
                )}
            </div>
            {
                wishList.map((item) => {
                    return (
                         <div className="wishBox" key={item.id}>
                            <div className="wishImage">
                                <img src={item.image} alt="Image" />
                                <p>{item.title}</p>
                            </div>
                            <div className="removeBtn">
                                <button onClick={() => removeWish(item.id)}>Remove</button>
                            </div>
                         </div>
                    )
                })
            }
            <div className="cleanBtn">
                <button onClick={() => cleanWish()}>Clean List</button>
            </div>
        </article>
    )
}