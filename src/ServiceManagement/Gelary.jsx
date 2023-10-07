import gel1 from "/src/images/sponser/gelary/ge-photo6.avif";
import gel2 from "/src/images/sponser/gelary/ge_photo-7.avif";
import gel3 from "/src/images/sponser/gelary/ge_photo2.avif";
import gel4 from "/src/images/sponser/gelary/ge_photo3.avif";
import gel5 from "/src/images/sponser/gelary/ge_photo4.avif";
import gel6 from "/src/images/sponser/gelary/ge_photo5.avif";
const Gelary = () => {
  return (
    <div className="max-w-6xl mb-20 mx-auto">
      <h1 className="text-center text-4xl font-semibold mt-20 mb-2">
        OUR GALLERY
      </h1>
      <p className="text-center mb-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, omnis
        modi. Voluptates esse <br /> nisi, sit, culpa labore excepturi, itaque
        rem facere ad dolorum omnis? Corrupti!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <img src={gel1} alt="" />
        <img src={gel2} alt="" />
        <img src={gel3} alt="" />
        <img src={gel4} alt="" />
        <img src={gel5} alt="" />
        <img src={gel6} alt="" />
      </div>
    </div>
  );
};

export default Gelary;
