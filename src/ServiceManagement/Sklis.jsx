import Slider from "react-slick";
import sklis1 from "/src/images/sponser/sklis/1-3.jpg";
import sklis2 from "/src/images/sponser/sklis/2-3.jpg";
import sklis3 from "/src/images/sponser/sklis/4-3 (1).jpg";
import sklis4 from "/src/images/sponser/sklis/5-1.jpg";

const Sklis = () => {
  return (
    <div className="max-w-6xl mx-auto mb-20 mt-20">
      <h1 className="text-[#E91E63] text-4xl font-semibold mb-2">
        Skill Speaker
      </h1>
      <hr className="w-40" />
      <p className="mt-3 mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, maiores
        ea, soluta sapiente numquam <br /> nisi minima a unde, hic fugiat id non
        alias facere.
      </p>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
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
      </div>
    </div>
  );
};

export default Sklis;
