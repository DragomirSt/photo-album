
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../servecies/auth';

const Logout = () => {

    const navigate = useNavigate();
    const { logoutUser, user } = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(res => {
                logoutUser();
            })
            .finally(() => {
                navigate('/');
            });

    }, [navigate, logoutUser, user.email]);

    return null;
}

export default Logout;