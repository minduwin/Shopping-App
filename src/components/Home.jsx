import '../styles/home.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className="homeContainer">
            <div className='homePic'>
                <img src="./src/assets/deals.jpg" alt="" />
            </div>
            <NavLink to='/Shop' className='buyButton'>
                <button>Buy Now</button>
            </NavLink>
        </div>
    )
}

export default Home;