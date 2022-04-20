
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuthContext from '../../hooks/useAuth';
import * as authService from '../../servecies/auth';

const Logout = () => {

    const navigate = useNavigate();
    const { logoutUser } = useAuthContext();

    useEffect(() => {
        authService.logout()
            .then(res => {
                logoutUser();
            })
            .finally(() => {
                navigate('/');
            });

    }, [navigate, logoutUser]);

    return null;
}

export default Logout;