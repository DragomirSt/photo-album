
import './Navigation.css';

import { Link } from 'react-router-dom'
const Navagation = () => {

    return (
        <div className='topnav'>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/logout">Logout</Link>
            </nav>
        </div>
    )
}

export default Navagation;