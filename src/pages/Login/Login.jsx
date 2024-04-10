import { useContext,useState } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from "../../components/AuthProvider/AuthProvider.jsx"
import { Helmet } from "react-helmet";
import { FaGoogle ,FaGithub,FaRegEye,FaEyeSlash} from "react-icons/fa";
import { signInWithPopup, GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
import auth from"../../firebase/firebase.config.js"
import toast from"../../components/Toast/Toast.jsx"


const Login = () => {
	
	const { signInUser } = useContext(AuthContext);
	const [show,setShow] = useState(false);
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();
	
	const handleGoogleLogin = ()=>{
		signInWithPopup(auth,googleProvider)
		.then(result => {
			toast("Logged In Google","success","Success Login")
		})
		.catch(err => {
			toast(err.message,"danger","Error")
		})
	};
	
	const handleGithubLogin = ()=>{
		signInWithPopup(auth,githubProvider)
		.then(result => {
			toast("Successfully Logged In with Github","success","Success")
		})
		.catch(err => {
			toast(err.message,"danger","Error")
		})
	}
	
	const handleLogin = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const email = form.get("email");
		const password = form.get("password");

		signInUser(email, password)
			.then(result => {
				toast("Successfully Logged In","success","Success")
			})
			.catch(err => {
				toast(err.message,"danger","Error");
			})
	}
	return (
		<div className="w-[90%] md:w-[70%] mx-auto">
			<Helmet>
				<title>NestifyHub | Login</title>
			</Helmet>
			<div className="my-20 border-2 rounded-xl py-3">
				<h1 className="text-2xl text-center my-4">Please Login</h1>
				<form onSubmit={handleLogin} className="card-body">
					<div className="form-control">
						
						<input type="email" placeholder="Email" className="border-b pb-3 mb-4 outline-none w-full" name="email" required />
					</div>
					<div className="form-control">
						
						<div className="relative">
							<input type={show ? 'text' : 'password'} placeholder="Password" className="border-b pb-3 mb-4 outline-none w-full" name="password" required />
							<span onClick={()=>setShow(!show)} className="absolute top-1 right-3 text-lg p-0 m-0">
								{show ? <FaEyeSlash/> : <FaRegEye/>}
							</span>
						</div>
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