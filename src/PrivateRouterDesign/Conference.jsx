import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Conference = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="max-w-6xl mx-auto">
      <div data-aos="fade-down" className="text-center pt-20 pb-28 bg-slate-50">
        <h1 className="text-4xl font-semibold">Event Schedule</h1>
        <div className="flex justify-center mt-3">
          <hr className="w-20  p-1 text-red-600" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempore
          excepturi iste quas nihil beatae temporibus. Quis nobis <br />{" "}
          perferendis illo, nihil totam blanditiis earum minima corrupti non
          quos voluptatibus architecto est, iste sint <br /> omnis, dolorum
          fugit consequuntur doloribus quo iusto?
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="mb-20 grid grid-cols-1  md:grid-cols-3 text-center  mt-[-50px]"
      >
        <div className="mb-5 bg-zinc-400 hover:bg-orange-500 shadow-md rounded-md p-6 w-60">
          <h1 className="text-3xl font-bold text-blue-700">Day-01</h1>
          <p className="mt-2 text-medium font-medium">2024, February 14</p>
        </div>
        <div className="mb-5 bg-zinc-400 hover:bg-orange-500 shadow-md rounded-md p-6 w-60">
          <h1 className="text-3xl font-bold text-blue-700">Day-02</h1>
          <p className="mt-2 text-medium font-medium">2024, February 19</p>
        </div>
        <div className="mb-5 bg-zinc-400 hover:bg-orange-500 shadow-md rounded-md p-6 w-60">
          <h1 className="text-3xl font-bold text-blue-700">Day-03</h1>
          <p className="mt-2 text-medium font-medium">2024, February 24</p>
        </div>
      </div>

      <div className="space-y-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow p-7 rounded-md">
          <div className="w-40">
            <h1 className="text-blue-500 text-xl">Sunday</h1>
            <p>10 PM</p>
          </div>
          <div>
            <a className="text-blue-600 hover:text-red-600 text-" href="#">
              Business Conference
            </a>
            <p
              className="text-lg text-blue-600 hover:text-red-600 text-"
              href="#"
            >
              World of Business Opportunities Management.
            </p>
          </div>
          <div>
            <p>Business Consultent.</p>
            <a className="text-blue-600 text-lg hover:text-red-600" href="#">
              Mildred Perkins
            </a>
          </div>
          <div>
            <button className="px-7 py-2 rounded-full text-white font-semibold bg-blue-600 hover:bg-red-600">
              Buy Now
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow p-7 rounded-md">
          <div className="w-40">
            <h1 className="text-blue-500 text-xl">Monday</h1>
            <p>09 AM</p>
          </div>
          <div>
            <a className="text-blue-600 hover:text-red-600 text-" href="#">
              Business Conference
            </a>
            <p
              className="text-lg text-blue-600 hover:text-red-600 text-"
              href="#"
            >
              World of Business Opportunities Management.
            </p>
          </div>
          <div>
            <p>Business Consultent.</p>
            <a className="text-lg text-blue-600 hover:text-red-600" href="#">
              Mildred Perkins
            </a>
          </div>
          <div>
            <button className="px-7 py-2 rounded-full text-white font-semibold bg-blue-600 hover:bg-red-600">
              Buy Now
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow p-7 rounded-md">
          <div className="w-40">
            <h1 className="text-blue-500 text-xl">Monday</h1>
            <p>04 PM</p>
          </div>
          <div>
            <p className="text-blue-600 hover:text-red-600 text-" href="#">
              Business Conference
            </p>
            <a className="text-blue-600 text-lg hover:text-red-600" href="#">
              A Spectrum of Opportunities
            </a>
          </div>
          <div>
            <p>Product Management</p>
            <a className="text-lg text-blue-600 hover:text-red-600" href="#">
              Brandon Day
            </a>
          </div>
          <div>
            <button className="px-7 py-2 rounded-full text-white font-semibold bg-blue-600 hover:bg-red-600">
              Buy Now
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow p-7 rounded-md">
          <div className="w-40">
            <h1 className="text-blue-500 text-xl">Wednesday</h1>
            <p>06 PM</p>
          </div>
          <div>
            <a className="text-blue-600 hover:text-red-600 text-" href="#">
              Business Conference
            </a>
            <p className="text-blue-600 hover:text-red-600 text-lg" href="#">
              World of Business Opportunities Management.
            </p>
          </div>
          <div>
            <p>Business Consultent.</p>
            <a className="text-blue-600 text-lg hover:text-red-600" href="#">
              Mildred Perkins
            </a>
          </div>
          <div>
            <button className="px-7 py-2 rounded-full text-white font-semibold bg-blue-600 hover:bg-red-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
