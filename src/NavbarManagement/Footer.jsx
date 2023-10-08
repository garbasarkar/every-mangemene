import { Link } from "react-router-dom";
import logo from "/src/images/logos2.jpg";
const Footer = () => {
  return (
    <div>
      <footer className="p-10 pt-20 pb-20 bg-black/60 text-base-content">
        <div className="text-white footer max-w-6xl mx-auto ">
          <aside>
            <Link to="/">
              <img className="w-16 h-16 rounded-full" src={logo} alt="" />
            </Link>
            <p>
            Conferences and Seminars
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Web Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <p>Email: conference@gmail.com</p>
            <p>Phone: +978 0911 9901</p>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
