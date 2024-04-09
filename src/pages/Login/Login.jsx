import { useContext } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from "../../components/AuthProvider/AuthProvider.jsx"
import { Helmet } from "react-helmet";

const Login = () => {

	const { signInUser } = useContext(AuthContext);
	const handleLogin = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const email = form.get("email");
		const password = form.get("password");

		signInUser(email, password)
			.then(result => {
				alert("Successfully LoggedIn")
			})
			.catch(err => {
				alert(err.message)
			})
	}
	return (
		<div className="w-[95%] md:w-[70%] mx-auto">
			<Helmet>
				<title>NestifyHub | Login</title>
			</Helmet>
			<div className="my-20 border-2 rounded-xl p-4">
				<h1 className="text-2xl text-center">Please Login</h1>
				<form onSubmit={handleLogin} className="card-body">
					<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input type="email" placeholder="email" className="input input-bordered" name="email" required />
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input type="password" placeholder="password" className="input input-bordered" name="password" required />
						<label className="label">
							<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
						</label>
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-primary">Login</button>
					</div>
					<h4 className="text-xs md:text-sm text-center">Do not have an account? <Link className="text-blue-700" to="/register">Create Account</Link></h4>
				</form>

			</div>
		</div>
	)
}

export default Login