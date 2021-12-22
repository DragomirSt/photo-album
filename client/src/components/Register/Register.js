
import './Register.css'

import { useNavigate } from 'react-router-dom';
import * as authService from '../../servecies/auth';

const Register = () => {
	const navigate = useNavigate();

	const registerHandler = (e) => {

		e.preventDefault();
		let formData = new FormData(e.target);

		let email = formData.get('email');
		let password = formData.get('password');
		let repeatePassword = formData.get('confirm-pass');

		if (password !== repeatePassword) {
			alert('Password missmatch');
		}

		authService.register(email, password)
			.then(res => {

				navigate('/login');
			})
			.catch(err => {
				alert(err);
			});
	};

	return (
		<div className='register-form'>
			<form method="POST" onSubmit={registerHandler}>
				<div className='register-form-text'>
					<h2>Register Form</h2>
				</div>
				<div className='email-label'>
					<h3>Email: </h3>
				</div>
				<div className='inputs'>
					<input type="text" name="email" className="email-input" placeholder="Email" />
				</div>
				<div className='password-label'>
					<h3>Password: </h3>
				</div>
				<div className='inputs-password'>
					<input type="password" name="password" className="password-input" placeholder="Password" />
				</div>
				<div className='re-password-label'>
					<h3>Confirm Password: </h3>
				</div>
				<div className='inputs-re-password'>
					<input type="password" name="password" className="password" placeholder="Password" />
				</div>
				<input className="button-submit" type="submit" value="Register" />
			</form>
		</div>
	);
};

export default Register;