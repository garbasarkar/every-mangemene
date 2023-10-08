import { useContext, useState } from "react";
import googleIcon from "/src/images/google-icon.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";

const Login = () => {
  const { userLogin, googleSignIn } = useContext(AuthContext);
  const [errors, setErrors] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const handleBtnLogin = (e) => {
    e.preventDefault();

    const fromIn = new FormData(e.currentTarget);
    const email = fromIn.get("email");
    const password = fromIn.get("password");
    console.log(email, password);
    setErrors("");
    setPassword("");
    if (password.length < 6) {
      setPassword("Password should be at least 6 characters or longer!");
      return;
    }
    userLogin(email, password)
      .then((result) => {
        console.log(result.user);
        swal("Good job!", "Login Sucssesfull!", "success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setErrors("Please provide me a valid input email and password!!!");
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-4/2">
      <div className="shadow w-[500px] p-5 rounded mx-auto mt-10 mb-10">
        <div className="w-full bg-[#EC5AA2] py-10 rounded shadow-md mb-5 text-center text-2xl font-semibold text-white">
          <h1>Login now!</h1>
        </div>
        <form onSubmit={handleBtnLogin}>
          <input
            className="w-full border mt-3 mb-3 py-2 px-2 rounded"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <br />
          <input
            className="w-full border py-2 px-2 rounded"
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            required
          />
          {password && (
            <small className="text-red-500 font-semibold">{password}</small>
          )}
          <input
            className="w-full border py-2 px-2 rounded mt-3 bg-[#EC5AA2] shadow text-white font-semibold"
            type="submit"
            value="Login"
          />
          {errors && <p className="text-red-500 font-semibold">{errors}</p>}
        </form>
        <div className=" flex justify-center mt-5 cursor-pointer">
          <div
            onClick={handleGoogleSignIn}
            className="w-2/3 flex items-center gap-5 border justify-between px-4 p-2 rounded-full shadow"
          >
            <img className="w-7" src={googleIcon} alt="" />
            <h1 className="text-lg font-semibold">Continue With Google</h1>
          </div>
        </div>
        <div>
          <h1 className="mt-8 text-center">
            Do not have a account?{" "}
            <Link to="/register" className="text-[#EC5AA2] font-bold">
              Register
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
