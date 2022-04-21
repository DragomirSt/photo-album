
import { createContext } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();
const initialUserState = {
    _id: null,
    name: null,
    accessToken: null
};

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(initialUserState);

    const setUserSessionData = (authData) => {
        setUser(authData);
    };
    const logoutUser = () => {
        setUser(initialUserState);
    };

    return (
        <AuthContext.Provider value={{ user, setUserSessionData, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};