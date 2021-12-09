

import * as authService from '../../servecies/auth';
const Login = () => {

    const loginHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email,password)
        .then(authData => {
            console.log(authData);
        })
    }
    return(
        <form method="POST" onSubmit={loginHandler}>
			<fieldset>
				<legend>Login Form</legend>

				<label htmlFor="email">Email</label>
				<input type="text" name="email" id="email" placeholder="Email" />

				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" placeholder="Password" />

				<input className="button submit" type="submit" value="Login" />
			</fieldset>
		</form>
    )
}

export default Login;