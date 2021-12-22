
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../servecies/auth';

const Logout = () => {
    
    const navigate = useNavigate();
    const { logoutUser } = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(() => {

                logoutUser();
                navigate('/login');
            })
    }, [navigate, logoutUser]);

    return null;
}

export default Logout;