import { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../components/AuthProvider/AuthProvider.jsx";
import toast from "../../components/Toast/Toast.jsx";
import { FaUser } from "react-icons/fa";
import { Avatar, TextField, Button, Grid, Checkbox, FormControlLabel, Typography } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";

const UpdateProfile = () => {
  const { user, updateProfile } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const firstInputRef = useRef(null);

  useEffect(() => {
    firstInputRef.current.focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photo");

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL
    })
      .then(() => {
        toast("Successfully Updated Profile", "success", "Reload To Show Updated Info");
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 150,
    });
  }, []);
  return (
    <div className="w-[90%] md:w-[60%] mx-auto">
      <Helmet>
        <title>NestifyHub | Update Profile </title>
      </Helmet>
      <div data-aos="fade-up" className="my-20 border-2 rounded-2xl py-4 space-y-3 bg-[rgba(255,255,255,0.2)] border-[rgba(0,0,0,0.3)] backdrop-blur-sm w-full md:w-[60%] mx-auto">
        <div className="flex flex-col gap-5 items-center justify-center mb-4">
          <div className="text-lg mr-2">
            <Avatar sx={{ bgcolor: 'secondary.main' }}>
              <FaUser />
            </Avatar>
          </div>
          <Typography component="h1" variant="h5">Update Profile</Typography>
        </div>
        <form onSubmit={onSubmit} className="card-body ">
          <div className="form-control">
            <TextField
              defaultValue={user?.displayName}
              type="text"
              name="name"
              label="Name"
              placeholder="Name"
              className="border-b pb-3 mb-4 outline-none w-full"
              required
              inputRef={firstInputRef}
            />
          </div>
          <div className="form-control">
            <TextField
              defaultValue={user?.photoURL}
              type="text"
              name="photo"
              label="Photo URL"
              placeholder="Photo Url"
              className="border-b pb-3 mb-4 outline-none w-full"
              required
            />
          </div>
          <div className="form-control">
            <TextField
              defaultValue={user?.email}
              type="email"
              name="email"
              label="Email"
              placeholder="Email"
              className="border-b pb-3 mb-4 outline-none w-full"
              aria-readonly
            />
          </div>
          <div className="form-control mt-6">
            <Button type="submit" variant="contained" className="bg-blue-500 text-white hover:bg-blue-700 w-full py-3 rounded-md">Update</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
