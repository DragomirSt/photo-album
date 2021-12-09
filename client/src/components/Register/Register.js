

import {useNavigate} from 'react-router-dom';

import * as authService from '../../servecies/auth';

const Register = () => {
const navigate = useNavigate();
	const registerHandler = (e) => {

		e.preventDefault();
		let formData = new FormData(e.target);

		let email = formData.get('email');
		let password = formData.get('password');

		authService.register(email, password)
			.then(authData => {
				
				navigate('/login');
			})

	}
	return (

		<form  method="POST" onSubmit={registerHandler}>
			<fieldset>
				<legend>Register Form</legend>

				<label htmlFor="email">Email</label>
				<input type="text" name="email" id="email" placeholder="Email" />

				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" placeholder="Password" />

				<label htmlFor="repeat-pass">Repeat Password</label>
				<input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" />

				<input className="button submit" type="submit" value="Register" />
			</fieldset>
		</form>

	)
}

export default Register;