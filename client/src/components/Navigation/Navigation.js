

import { Link } from 'react-router-dom'
const Navagation = () => {

    return (
        <div>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </div>
    )
}

export default Navagation;