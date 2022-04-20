
import './Navigation.css';

import { Link } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuth';

const Navagation = () => {
    const { user } = useAuthContext();

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
            <section className='nav'>
                <Link to="/"></Link>
                <Link to="/all-photos">Photos</Link>
                {user.email
                    ? userNavigation
                    : guestNavigation}
            </section>
        </div>
    );
};

export default Navagation;