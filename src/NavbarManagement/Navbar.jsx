import { NavLink } from "react-router-dom";
import profile from "/src/images/logo.avif";
import logo from "/src/images/logos2.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

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
    <>
      <div className=" md:w-10/12 md:mb-5 mt-5 mx-auto flex md:flex-row justify-between items-center">
        <div
          className="pl-5 lg:hidden  text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open === true ? (
            <AiOutlineClose></AiOutlineClose>
          ) : (
            <AiOutlineMenu className=" "></AiOutlineMenu>
          )}
        </div>
        <NavLink to="/">
          <img className="hidden lg:inline-flex w-32 " src={logo} alt="" />
        </NavLink>

        <nav>
          <ul
            className={`bg-gray-400 p-5 md:flex duration-1000 absolute ${
              open ? "left-0 top-16" : "-top-60 left-0"
            } lg:static px-5 lg:bg-white  `}
          >
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
            {user && (
              <>
                <li>
                  <NavLink
                    className="ml-5 text-lg font-semibold"
                    to="/conference"
                  >
                    Conference
                  </NavLink>
                </li>
                <li>
                  <NavLink className="ml-5 text-lg font-semibold" to="/meeting">
                    Meeting
                  </NavLink>
                </li>
              </>
            )}
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
    </>
  );
};

export default Navbar;
