
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { AuthContext } from './contexts/AuthContext';

import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {

  const [user, setUser] = useState({
    _id: null,
    email: null,
    accessToken: null
  });

  const setUserSessionData = (authData) => {
    setUser(authData);
  }

  return (
    <>
      <AuthContext.Provider value={{ user, setUserSessionData }}>
        <div className="App">
          <Navigation />
        </div>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;
