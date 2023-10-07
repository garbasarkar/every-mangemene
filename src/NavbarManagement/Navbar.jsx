import { NavLink } from "react-router-dom";
import profile from "/src/images/logo.avif";
import logo from "/src/images/logos2.jpg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const userLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
        {user ? (
          <button
            onClick={userLogOut}
            className="px-6 py-2 bg-[#E91E63] rounded text-white font-semibold"
          >
            SIGN OUT
          </button>
        ) : (
          <button className="px-6 py-2 bg-[#E91E63] rounded text-white font-semibold">
            LOGIN
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
