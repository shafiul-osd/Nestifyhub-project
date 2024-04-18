import { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../components/AuthProvider/AuthProvider.jsx";
import toast from "../../components/Toast/Toast.jsx";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { Avatar, TextField, Button, Grid, Checkbox, FormControlLabel, Typography } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";

const Register = () => {
  const { createUser, updateProfile, auth, LogOut } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const firstInputRef = useRef(null);

  useEffect(() => {
    firstInputRef.current.focus();
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photoURL = form.get("photo");

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      return toast("Password must have at least 6 characters and contain both lowercase and uppercase letters", "warning", "Error");
    }
    if(email == "" || name == "" || photoURL == "" || password == ""){
      return toast("Fullfill All Required info", "danger", "Error");
    }
    createUser(email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: name,
          photoURL: photoURL
        })
          .then(() => {
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


  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 150,
    });
  }, []);

  return (
    <div className="w-[90%] md:w-[40%] mx-auto pt-5">
      <Helmet>
        <title>NestifyHub | Register</title>
      </Helmet>
      <div className="">
        <form data-aos="fade-down" onSubmit={handleRegister} className="card-body my-20 rounded-2xl  bg-[rgba(255,255,255,0.2)] border border-[rgba(0,0,0,0.3)] backdrop-blur-sm">
          <div className="pt-5">
            <Avatar sx={{ m: 'auto', mb: 2, bgcolor: 'secondary.main' }} />
            <Typography component="h1" variant="h5" className="text-center">Register</Typography>
          </div>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            placeholder="Name"
            inputRef={firstInputRef}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Photo URL"
            name="photo"
            placeholder="Photo Url"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            placeholder="Email"
            type="email"
          />
          <div className="relative">
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              name="password"
              placeholder="Password"
              type={show ? 'text' : 'password'}
            />
            <div onClick={() => setShow(!show)} className="absolute top-9 right-3 text-lg">
              {show ? <FaEyeSlash /> : <FaRegEye />}
            </div>
          </div>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="I agree to the terms and conditions"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
          >
            Register
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login" className="text-blue-700">Already have an account? Login</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Register;
