
import './Login.css'

import { useNavigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuth';

import * as authService from '../../servecies/auth';
import { errorNotification, successNotification } from '../../notifications/notification';

const Login = () => {
    const { setUserSessionData } = useAuthContext();
    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);

        let email = formData.get('email');
        let password = formData.get('password');
        if (email.length < 1 || password.length < 1) {
            return errorNotification(['All input fields are requiered!']);
        }

        authService.login(email, password)
            .then(authData => {
                setUserSessionData(authData);
                successNotification([authData.message]);

                setTimeout(() => {
                    navigate('/all-photos');
                }, 1600);
            })
            .catch(err => {
                errorNotification([err]);
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