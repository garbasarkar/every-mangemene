import { NavLink } from "react-router-dom";
import profile from "/src/images/logo.avif";
import logo from "/src/images/logos2.jpg";

const Navbar = () => {
  return (
    <div className=" w-10/12 mx-auto flex flex-col md:flex-row justify-between items-center">
      <NavLink to="/">
        <img className="w-32" src={logo} alt="" />
      </NavLink>

      <nav>
        <ul className="flex">
          <li>
            <NavLink className="ml-5 text-lg font-semibold" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="ml-5 text-lg font-semibold" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="ml-5 text-lg font-semibold" to="/service">
              Service
            </NavLink>
          </li>
          <li>
            <NavLink className="ml-5 text-lg font-semibold" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex mt-5 md:mt-0 gap-3 items-center mr-5">
        <img className="w-10 rounded-full" src={profile} alt="" />
        <button>LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;
