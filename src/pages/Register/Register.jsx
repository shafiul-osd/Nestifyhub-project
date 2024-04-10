import { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../components/AuthProvider/AuthProvider.jsx";
import toast from "../../components/Toast/Toast.jsx";
import {FaRegEye,FaEyeSlash} from "react-icons/fa";

const Register = () => {
  const { createUser, updateProfile, auth, LogOut } = useContext(AuthContext);
	const [show,setShow] = useState(false);
	
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photoURL = form.get("photo");
    
    if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
    	return toast("Password must have atleast 6 carecter and a lowerCase and upperCase letter", "warning", "Error");
    }

    createUser(email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: name,
          photoURL: photoURL
        })
        .then(() => {
          LogOut(auth);
          toast("Registered Successfully", "success", "Success");
        })
        .catch((error) => {
          toast(error.message, "danger", "Error");
        });
      })
      .catch((error) => {
        toast(error.message, "danger", "Error");
      });
  };

  return (
    <div className="w-[90%] md:w-[60%] mx-auto">
      <Helmet>
        <title>NestifyHub | Register </title>
      </Helmet>
      <div className="my-20 border-2 rounded-2xl py-4 space-y-3">
        <h1 className="text-2xl text-center my-4">Please Register</h1>
        <form onSubmit={handleRegister} className="card-body ">
          <div className="form-control">
            
            <input type="text" name="name" placeholder="Name" className="border-b pb-3 mb-4 outline-none w-full" required />
          </div>
          <div className="form-control">
            
            <input type="text" name="photo" placeholder="Photo Url" className="border-b pb-3 mb-4 outline-none w-full" required />
          </div>
          <div className="form-control">
            
            <input type="email" name="email" placeholder="email" className="border-b pb-3 mb-4 outline-none w-full" required />
          </div>
          <div className="form-control">
            
         		 <div className="relative">
							<input type={show ? 'text' : 'password'} placeholder="password" className=" border-b pb-3 mb-4 outline-none w-full" name="password" required />
							<div onClick={()=>setShow(!show)} className="absolute top-1 right-3 text-lg">
								{show ? <FaEyeSlash/> : <FaRegEye/>}
							</div>
					</div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <h4 className="text-xs md:text-sm text-center">Already have an account? <Link className="text-blue-700" to="/login">Login</Link></h4>
        </form>
      </div>
    </div>
  );
};

export default Register;
