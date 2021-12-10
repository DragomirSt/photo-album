
import * as authService from '../../servecies/auth';
import { AuthContext } from '../../contexts/AuthContext';

import { useContext, useEffect } from 'react'

const Logout = () => {
    const {logoutUser} = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
        .then(() => {
            logoutUser()
        })
    })
    return null;
}

export default Logout;