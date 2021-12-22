
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { AuthContext } from './contexts/AuthContext';

import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import Create from './components/Create/CreateCard';
import AllPhotos from './components/Home/AllPhotos';
import DeleteComponent from './components/Delete/DeleteComponent';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import MyPhotos from './components/MyPhotos/MyPhotos';

const initialUserState = {
  _id: null,
  email: null,
  accessToken: null
};

function App() {
  const [user, setUser] = useState(initialUserState);

  const setUserSessionData = (authData) => {
    setUser(authData);
  };

  const logoutUser = () => {
    setUser(initialUserState);
  };


  return (
    <AuthContext.Provider value={{ user, setUserSessionData, logoutUser }}>
      <div>
        <div className='app'>
          <Navigation />

          <main className='site-content'>
            <Routes>
              <Route path="/" element={<AllPhotos />} />
              <Route path="/all-photos" element={<AllPhotos />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/create" element={<Create />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/delete/:id" element={<DeleteComponent />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/my-photos" element={<MyPhotos />} />
            </Routes>
          </main>
        </div>
      </div>

    </AuthContext.Provider>
  );
}

export default App;
