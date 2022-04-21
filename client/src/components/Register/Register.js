
import './Register.css'

import { useNavigate } from 'react-router-dom';
import * as authService from '../../servecies/auth';
import { errorNotification, successNotification } from '../../notifications/notification';

const Register = () => {
	const navigate = useNavigate();

	const registerHandler = (e) => {
		e.preventDefault();
		let formData = new FormData(e.target);

		let name = formData.get('name');
		let email = formData.get('email');
		let password = formData.get('password');
		let repeatePassword = formData.get('confirm-pass');

		if (name.length < 2 || email.length < 2 || password.length < 2 || repeatePassword.length < 2) {
			return errorNotification(['All input fields are requied.']);
		}
		if (password !== repeatePassword) {
			return errorNotification(['Password and repeated password missmatch.']);
		}

		authService.register(name, email, password)
			.then(res => {
				successNotification([res.message]);
				setTimeout(() => {
					navigate('/login');
				}, 1800)
			})
			.catch(err => {
				errorNotification([err]);
			});
	};

	return (
		<div className='register-form'>
			<form method="POST" onSubmit={registerHandler}>
				<div className='register-form-text'>
					<h2>Register Form</h2>
				</div>
				<div className='name-label'>
					<h3>Name: </h3>
				</div>
				<div className='input-name'>
					<input type="text" name="name" className="email-input" placeholder="Name" />
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
					<input type="password" name="confirm-pass" className="password" placeholder="Password" />
				</div>
				<div>
					<input className='button-submit' type="submit" value="Register" />
				</div>
			</form>
		</div>
	);
};

export default Register;