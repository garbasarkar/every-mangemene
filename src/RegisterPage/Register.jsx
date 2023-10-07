import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-4/2">
      <div className="shadow w-[500px] p-5 rounded mx-auto mt-10 mb-10">
        <div className="w-full bg-[#EC5AA2] py-10 rounded shadow-md mb-5 text-center text-2xl font-semibold text-white">
          <h1>Register now!</h1>
        </div>
        <input
          className="w-full border py-2 px-2 rounded"
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
        />
        <br />
        <input
          className="w-full border mt-3 mb-3 py-2 px-2 rounded"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <br />
        <input
          className="w-full border py-2 px-2 rounded"
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
        />
        <div className="flex gap-3 mt-2 mb-4">
          <input type="checkbox" name="" id="" />
          <h1>Remainder</h1>
        </div>
        <input
          className="w-full border py-2 px-2 rounded mt-3 bg-[#EC5AA2] shadow text-white font-semibold"
          type="submit"
          value="Register"
        />
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
