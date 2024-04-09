import { useContext } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from "../../components/AuthProvider/AuthProvider.jsx"
import { Helmet } from "react-helmet";
import { FaGoogle ,FaGithub} from "react-icons/fa";
import { signInWithPopup, GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
import auth from"../.././firebase/firebase.config.js"

const Login = () => {

	const { signInUser } = useContext(AuthContext);
	
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();
	
	const handleGoogleLogin = ()=>{
		signInWithPopup(auth,googleProvider)
		.then(result => {
			alert("Successfully Logged In with Google");
		})
		.catch(err => {
			alert(err.message)
		})
	};
	
	const handleGithubLogin = ()=>{
		signInWithPopup(auth,githubProvider)
		.then(result => {
			alert("Successfully Logged In with GitHub");
		})
		.catch(err => {
			alert(err.message)
		})
	}
	
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
				<span className="divider m-0 p-0">or</span>
				<div className="flex justify-center gap-10 items-center my-4">
					<button onClick={handleGoogleLogin} className="btn btn-outline text-xl"><FaGoogle /></button>
					<button onClick={handleGithubLogin} className="btn btn-outline text-xl"><FaGithub /></button>
				</div>
			</div>
		</div>
	)
}

export default Login