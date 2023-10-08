import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sklis1 from "/src/images/sponser/sklis/1-3.jpg";
import sklis2 from "/src/images/sponser/sklis/2-3.jpg";
import sklis3 from "/src/images/sponser/sklis/4-3 (1).jpg";
import sklis4 from "/src/images/sponser/sklis/5-1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Sklis = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div data-aos="fade-up" className="max-w-6xl mx-auto mb-20 mt-20">
      <div data-aos="fade-right">
        <h1 className="text-[#E91E63] text-4xl font-semibold mb-2">
          Skill Speaker
        </h1>
        <hr className="w-40" />
        <p className="mt-3 mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          maiores ea, soluta sapiente numquam <br /> nisi minima a unde, hic
          fugiat id non alias facere.
        </p>
      </div>
      {/* <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <div className="shadow-md rounded p-5">
          <img className="rounded shadow w-full" src={sklis1} alt="" />
          <div className="flex justify-between items-center  mt-2 mb-2">
            <div>
              <h1 className="text-lg font-semibold ">Hellina joha</h1>
            </div>
            <div className="w-28 rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="shadow-md rounded p-5">
          <img className="rounded shadow" src={sklis2} alt="" />
          <div className="flex justify-between items-center mb-2 mt-2">
            <h1 className="text-lg font-semibold">Hellina joha</h1>
            <div className="w-28 rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="shadow-md rounded p-5">
          <img className="rounded shadow" src={sklis3} alt="" />
          <div className="flex justify-between mt-2 mb-2">
            <h1 className="text-lg font-semibold">Hellina joha</h1>
            <div className="w-29 rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="shadow-md rounded p-5">
          <img className="rounded shadow" src={sklis4} alt="" />
          <div className="flex justify-between mt-2 mb-2">
            <h1 className="text-lg font-semibold">Hellina joha</h1>
            <div className="w-28 rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div> */}

      <Slider  {...settings}>
        <div>
          <div className="shadow-md rounded p-5">
            <img className="rounded shadow w-full" src={sklis1} alt="" />
            <div className="flex justify-between items-center  mt-2 mb-2">
              <div>
                <h1 className="text-lg font-semibold ">Hellina joha</h1>
              </div>
              <div className="w-28 rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div>
          <div className="shadow-md rounded p-5">
            <img className="rounded shadow" src={sklis2} alt="" />
            <div className="flex justify-between items-center mb-2 mt-2">
              <h1 className="text-lg font-semibold">Hellina joha</h1>
              <div className="w-28 rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div>
          <div className="shadow-md rounded p-5">
            <img className="rounded shadow" src={sklis3} alt="" />
            <div className="flex justify-between mt-2 mb-2">
              <h1 className="text-lg font-semibold">Hellina joha</h1>
              <div className="w-29 rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div>
          <div className="shadow-md rounded p-5">
            <img className="rounded shadow" src={sklis4} alt="" />
            <div className="flex justify-between mt-2 mb-2">
              <h1 className="text-lg font-semibold">Hellina joha</h1>
              <div className="w-28 rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="shadow-md rounded p-5">
          <img className="rounded shadow w-full" src={sklis1} alt="" />
          <div className="flex justify-between items-center  mt-2 mb-2">
            <div>
              <h1 className="text-lg font-semibold ">Hellina joha</h1>
            </div>
            <div className="w-28 rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="shadow-md rounded p-5">
          <img className="rounded shadow" src={sklis2} alt="" />
          <div className="flex justify-between items-center mb-2 mt-2">
            <h1 className="text-lg font-semibold">Hellina joha</h1>
            <div className="w-28 rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="shadow-md rounded p-5">
          <img className="rounded shadow" src={sklis3} alt="" />
          <div className="flex justify-between mt-2 mb-2">
            <h1 className="text-lg font-semibold">Hellina joha</h1>
            <div className="w-29 rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="shadow-md rounded p-5">
          <img className="rounded shadow" src={sklis2} alt="" />
          <div className="flex justify-between items-center mb-2 mt-2">
            <h1 className="text-lg font-semibold">Hellina joha</h1>
            <div className="w-28 rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="shadow-md rounded p-5">
          <img className="rounded shadow" src={sklis3} alt="" />
          <div className="flex justify-between mt-2 mb-2">
            <h1 className="text-lg font-semibold">Hellina joha</h1>
            <div className="w-29 rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </Slider>
    </div>
  );
};

export default Sklis;
