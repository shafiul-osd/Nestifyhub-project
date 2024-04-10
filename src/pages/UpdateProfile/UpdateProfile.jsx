import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../components/AuthProvider/AuthProvider.jsx";
import auth from"../../firebase/firebase.config.js"
import toast from "../../components/Toast/Toast.jsx"

export default function UpdateProfile() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { user , updateProfile, setUser} = useContext(AuthContext);

  const onSubmit = (data) => {
  	 updateProfile(auth.currentUser, {
  	 	displayName : data.name,
  	 	photoURL : data.photo
  	 })
  	 .then(result =>{
  	 	toast("Successfully Upadated Profile","info","Reload To Show Updated Info");
  	 })
  	 .catch(err => {
  	 	alert(err.message)
  	 })
  }

  const [show, setShow] = useState(false);

  return (
    <div className="w-[90%] md:w-[60%] mx-auto">
      <Helmet>
        <title>NestifyHub | Register </title>
      </Helmet>
      <div className="my-20 border-2 rounded-2xl py-4 space-y-3">
        <h1 className="text-2xl text-center my-4">Update Profile Info</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
          <div className="form-control">
            <input defaultValue={user?.displayName} {...register("name", {})} type="text" name="name" placeholder="Name" className="border-b pb-3 mb-4 outline-none w-full" required />
          </div>
          <div className="form-control">
            <input defaultValue={user?.photoURL} {...register("photo", {})} type="text" name="photo" placeholder="Photo Url" className="border-b pb-3 mb-4 outline-none w-full" required />
          </div>
          <div className="form-control">
            <input defaultValue={user?.email} {...register("email", {})} type="email" name="email" placeholder="Email" className="border-b pb-3 mb-4 outline-none w-full" readOnly />
          </div>
          
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
