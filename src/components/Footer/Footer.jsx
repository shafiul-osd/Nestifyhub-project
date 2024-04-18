import Aos from 'aos';
import { useEffect } from 'react'
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
		Aos.init({
			offset: 300,
			duration: 600,
			easing: 'ease-in-sine',
			delay: 200,
		});
	}, []);
  return (
    <div>
      <footer className="footer grid grid-cols-1 md:grid-cols-3 p-10 bg-neutral text-neutral-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Residential Property Listings</a>
          <a className="link link-hover">Buyer Representation</a>
          <a className="link link-hover">Seller Representation</a>
          <a className="link link-hover">Mortgage Assistance</a>
          <a className="link link-hover">Legal Services</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press Kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </footer>
    </div>
  )
}

export default Footer