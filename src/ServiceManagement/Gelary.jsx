import gel1 from "/src/images/sponser/gelary/ge-photo6.avif";
import gel2 from "/src/images/sponser/gelary/ge_photo-7.avif";
import gel3 from "/src/images/sponser/gelary/ge_photo2.avif";
import gel4 from "/src/images/sponser/gelary/ge_photo3.avif";
import gel5 from "/src/images/sponser/gelary/ge_photo4.avif";
import gel6 from "/src/images/sponser/gelary/ge_photo5.avif";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Gelary = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="max-w-6xl px-4 px-4 mb-20 mx-auto">
      <div data-aos="fade-up">
        <h1 className="text-center text-4xl font-semibold mt-20 mb-2">
          OUR <span className="text-[#E91E63]"> GALLERY</span>
        </h1>
        <p className="text-center mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
          omnis modi. Voluptates esse <br /> nisi, sit, culpa labore excepturi,
          itaque rem facere ad dolorum omnis? Corrupti!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <img data-aos="fade-up" src={gel1} alt="" />
        <img data-aos="fade-up" src={gel2} alt="" />
        <img data-aos="fade-up" src={gel3} alt="" />
        <img data-aos="fade-down" src={gel4} alt="" />
        <img data-aos="fade-down" src={gel5} alt="" />
        <img data-aos="fade-down" src={gel6} alt="" />
      </div>
    </div>
  );
};

export default Gelary;
