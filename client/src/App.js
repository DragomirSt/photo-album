
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthContextProvider } from './contexts/AuthContext';

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
import Comment from './components/Comment/Comment';
import StartPage from './components/StartPage/StartPage';
import RequireAuth from './components/Authorization/Auth';
import PageNotFound from './components/PageNotFound/Error';

function App() {
  return (
    <AuthContextProvider>
      <div className='app'>
        <Toaster containerStyle={{
          right: 700,
          top: 35
        }} />
        <Navigation />
        <main className='site-content'>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/all-photos" element={<AllPhotos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details/:id" element={<Details />} /><Route />
            <Route element={<RequireAuth />}>
              <Route path="/create" element={<Create />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/delete/:id" element={<DeleteComponent />} />
              <Route path="/my-photos" element={<MyPhotos />} />
              <Route path="/comment/:id" element={<Comment />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    </AuthContextProvider>
  );
};

export default App;
