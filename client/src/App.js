
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { AuthContext } from './contexts/AuthContext';

import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';

const initialUserState = {
  _id: null,
  email: null,
  accessToken: null
};

function App() {
  const [user, setUser] = useState(initialUserState);

  const setUserSessionData = (authData) => {
    setUser(authData);
  }

  const logoutUser = () => {
    setUser(initialUserState);
  }

  return (
    <>
      <AuthContext.Provider value={{ user, setUserSessionData, logoutUser }}>
        <div className="App">
          <Navigation />
        </div>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="logout" element={<Logout/>}/>
          </Routes>
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;
