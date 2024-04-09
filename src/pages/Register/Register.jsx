import { useContext } from "react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";
import { AuthContext } from "../../components/AuthProvider/AuthProvider.jsx"
import toast from"../../components/Toast/Toast.jsx"
const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    createUser(email, password)
      .then(result => {
        toast(" Registered Successfully","success","Success")
      })
      .catch(err => {
        toast(err.message,"danger","Error")
      })
  }

  return (
    <div className="w-[95%]  md:w-[70%] mx-auto">
      <Helmet>
        <title>NestifyHub | Register </title>
      </Helmet>
      <div className="my-20 border-2 rounded-2xl py-4">
        <h1 className="text-2xl text-center">Please Register</h1>
        <form onSubmit={handleRegister} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <h4 className="text-xs md:text-sm text-center">Already have an account? <Link className="text-blue-700" to="/login">Login</Link></h4>
        </form>

      </div>
    </div>
  )
}

export default Register