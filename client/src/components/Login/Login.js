
import './Login.css'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

import * as authService from '../../servecies/auth';

const Login = () => {
    const { setUserSessionData } = useContext(AuthContext);
    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then(authData => {
                
                setUserSessionData(authData);
                navigate('/all-photos')
            })
            .catch(err => {
                //Toddo: error handling
                alert(err)

            });

    };

    return (
        <div className='login-form'>
            <form method="POST" onSubmit={loginHandler}>
                <div className='login-form-text'>
                    <h2>Login Form</h2>
                </div>
                <div className='email-label'>
                    <h3>Email: </h3>
                </div>
                <div className='inputs'>
                    <input type="text" name="email" className="email" placeholder="Email" />
                </div>
                <div className='password-label'>
                    <h3>Password: </h3>
                </div>
                <div className='inputs-password'>
                    <input type="password" name="password" className="password" placeholder="Password" />
                </div>
                <div>
                    <input className="button-submit" type="submit" value="Login" />
                </div>

            </form>
        </div>
    );
};

export default Login;