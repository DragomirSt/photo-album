
import './Navigation.css';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

const Navagation = () => {
    const { user } = useContext(AuthContext);

    const guestNavigation = (
        <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </>
    );
    const userNavigation = (
        <>
            <Link to="/create">Create</Link>
            <Link to="/my-photos">My Photos</Link>
            <Link to="/logout">Logout</Link>
        </>
    );

    return (
        <div className='topnav'>
            <nav className='nav'>
                <Link to="/"></Link>
                <Link to="/all-photos">Photos</Link>
                {user.email
                    ? userNavigation
                    : guestNavigation}
            </nav>
        </div>
    );
};

export default Navagation;