import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FaGoogle, FaGithub, FaRegEye, FaEyeSlash } from 'react-icons/fa';
import toast from '../../components/Toast/Toast.jsx';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import auth from '../../firebase/firebase.config.js';
import { Navigate, useLocation, useNavigate,Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(state ? state : "/");
      toast("Successfully Logged In", "success", "Success");
    } catch (error) {
      toast(error.message, "danger", "Error");
    }
  };

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        toast("Logged In Google", "success", "Success Login");
        navigate(state ? state : "/");
      })
      .catch(err => {
        toast(err.message, "danger", "Error");
      });
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        navigate(state ? state : "/");
        toast("Successfully Logged In with Github", "success", "Success");
      })
      .catch(err => {
        toast(err.message, "danger", "Error");
      });
  };

  const [show, setShow] =useState(false);

  useEffect(() => {
    Aos.init({
      offset: 300,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 200,
    });
  }, []);

  return (
    <Container component="main" maxWidth="sm">
      <Helmet>
        <title>Nestify || Login Page</title>
      </Helmet>
      <CssBaseline />
      <Box data-aos="fade-right" className="bg-white p-5 w-[100%] rounded-2xl mb-16" sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
        <Typography component="h1" variant="h5">Sign in</Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <div className="relative">
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={show ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
            />
            <span onClick={() => setShow(!show)} style={{ cursor: 'pointer' }} className='absolute top-9 right-5'>
              {show ? <FaEyeSlash /> : <FaRegEye />}
            </span>
          </div>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container className='text-xS flex justify-between items-center gap-5'>
            <Grid item xs>
              <Link>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <p>Do Not Have an Account?<Link to="/register" className='text-blue-700'>Sign Up</Link></p>
            </Grid>
          </Grid>
          <div className='grid grid-cols-1 gap-2 my-3'>
            <Button onClick={handleGoogleLogin} variant="outlined" startIcon={<FaGoogle />}>
              Sign In with Google
            </Button>
            <Button onClick={handleGithubLogin} variant="outlined" startIcon={<FaGithub />}>
              Sign In with Github
            </Button>
          </div>
        </Box>
      </Box>
    </Container>
  );
}
