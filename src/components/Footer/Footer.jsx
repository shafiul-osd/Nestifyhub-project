import Aos from 'aos';
import { useEffect } from 'react'
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
		Aos.init({
			offset: 200,
			duration: 800,
			easing: 'ease-in-sine',
			delay: 150,
		});
	}, []);
  return (
    <div>
      <footer className="footer grid grid-cols-3 p-10 bg-neutral text-neutral-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  )
}

export default Footer