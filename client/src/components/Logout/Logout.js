
import * as authService from '../../servecies/auth';
import { AuthContext } from '../../contexts/AuthContext';

import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    
    const navigate = useNavigate();
    const { logoutUser } = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(() => {

                logoutUser();
                navigate('/');
            })
    }, [navigate, logoutUser]);

    return null;
}

export default Logout;