import { useContext, useState } from "react";
import googleIcon from "/src/images/google-icon.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";

const Register = () => {
  const { userCreate, googleSignIn, upDateProfile } = useContext(AuthContext);
  const [errors, setErrors] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const handleBtnRegister = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const fromIn = new FormData(e.currentTarget);
    const name = fromIn.get("name");
    const photo = fromIn.get('photo')
    const email = fromIn.get("email");
    const password = fromIn.get("password");
    console.log(name, photo, email, password);
    setEmailErr("");
    setErrors("");
    if (password.length < 6) {
      setErrors("Password should be at least 6 characters or longer!");
      return;
    } else if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/.test(
        password
      )
    ) {
      setErrors(
        "Your password should have at least on uppercase and special characters!"
      );
      return;
    }
    userCreate(email, password)
      .then((result) => {
        console.log(result.user);
        upDateProfile(name, photo)
        .then(() => {
          swal("Welcome!", "Success full Registeration!", "success");
        })
      })
      .catch((error) => {
        console.log(error);
        setEmailErr("Your email address has been used! ");
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
    <div className="w-2/2 md:w-4/2">
      <div className="shadow w-full md:w-[500px] p-5 rounded mx-auto mt-10 mb-10">
        <div className="w-full bg-[#EC5AA2] py-10 rounded shadow-md mb-5 text-center text-2xl font-semibold text-white">
          <h1>Register now!</h1>
        </div>
        <form onSubmit={handleBtnRegister}>
          <input
            className="w-full border py-2 px-2 rounded"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
          />
          <br />
          <input
            className="w-full border mt-3 py-2 px-2 rounded"
            type="text"
            name="photo"
            id="photo"
            placeholder="Photo URL"
            required
          />

          <br />
          <input
            className="w-full border mt-3 mb-3 py-2 px-2 rounded"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          {emailErr && <p className="text-red-600 font-semibold">{emailErr}</p>}
          <br />
          <input
            className="w-full border py-2 px-2 rounded"
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            required
          />
          {errors && <p className="text-red-600 font-semibold">{errors}</p>}
          <div className="flex gap-3 mt-2 mb-4">
            <input type="checkbox" name="" id="" />
            <h1>Remainder</h1>
          </div>
          <input
            className="w-full border py-2 px-2 rounded mt-3 bg-[#EC5AA2] shadow text-white font-semibold"
            type="submit"
            value="Register"
          />
        </form>
        <div className=" flex justify-center mt-5 cursor-pointer">
          <div
            onClick={handleGoogleSignIn}
            className="w-full md:w-2/3 flex items-center gap-5 border justify-between px-4 p-2 rounded-full shadow"
          >
            <img className="w-7" src={googleIcon} alt="" />
            <h1 className="text-lg font-semibold">Continue With Google</h1>
          </div>
        </div>
        <div>
          <h1 className="mt-8 text-center">
            Do not have a account?{" "}
            <Link to="/login" className="text-[#EC5AA2] font-bold">
              Login
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
