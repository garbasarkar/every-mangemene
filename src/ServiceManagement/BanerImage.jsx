// import baner from "/src/images/baner.jpg";
// import slider1 from "/src/images/photos1.avif";
// import slider2 from "/src/images/photos2.avif";
// import slider3 from "/src/images/photos3.avif";
// import slider4 from "/src/images/photos4.avif";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import upImage from "/src/images/sponser/imagesshow.avif";

const BanerImage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="baner">
      <div className="flex flex-col md:flex-row justify-between items-center pt-44 px-10">
        <div data-aos="fade-left" className="text-white">
          <h1 className="text-3xl md:text-5xl font-bold">
            WELCOME TO <span className="text-[#E91E63]">CONSESSION</span> <br />
            CONFERENCE
            <p className="text-[16px] mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              maiores adipisci at <br /> deserunt praesentium reprehenderit
              repudiandae odio? Fugit, vitae? Pariatur delectus dicta <br />{" "}
              laborum magnam. Possimus tempore perspiciatis ullam alias
              deserunt.
            </p>
            <button className="text-lg text-white font-semibold px-6 py-2 rounded bg-[#E91E63]">
              VIEW MORE
            </button>
          </h1>
        </div>
        <div data-aos="fade-right">
          <img className="w-[500px]" src={upImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BanerImage;
