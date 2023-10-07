import conversion1 from "/src/images/mentoring.webp";
import conversion2 from "/src/images/corporate.webp";
import conversion3 from "/src/images/conversion.avif";
import { BsFillGeoAltFill, BsEnvelope } from "react-icons/bs";

const Conversion = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20">
      {/* <h1 className=" mx-auto text-center text-3xl md:text-5xl font-semibold mb-4">
        Welcome to Consession <br /> Conference
      </h1>
      <p className=" mx-auto text-center  mb-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        quas obcaecati! Libero odit a odio <br /> molestiae expedita officiis
        sint, aut adipisci reiciendis dolorum omnis tempora similique eaque qui.
      </p> */}

      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row gap-5 flex-1">
          <div className="">
            <img className="w-60 h-72 mb-5" src={conversion3} alt="" />
            <img className="w-60" src={conversion2} alt="" />
          </div>
          <img className="w-60" src={conversion1} alt="" />
        </div>
        <div className="flex-1">
          <h1 className="text-center text-4xl font-semibold mt-10 md:mt-0 ">
            GET THE LATEST INFO{" "}
            <span className="text-[#E91E63]">ABOUT EVENTEN</span>
          </h1>
          <p className="mt-3 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            minus iste provident vero ducimus magni sunt non. Reprehenderit quis
            ipsam dicta amet voluptatum dolore sit harum voluptatem, nobis iusto
            culpa inventore at ab fugiat?
          </p>
          <div className="flex flex-col md:flex-row gap-5 mt-8">
            <div className="flex shadow-md p-4 items-center gap-4">
              <div className=" border bg-[#E91E63] hover:bg-orange-600 h-12 p-2 rounded-full">
                <BsFillGeoAltFill className="text-3xl  text-white"></BsFillGeoAltFill>
              </div>
              <div>
                <h1 className="font-semibold">WHERE</h1>
                <p>Brimingham city park</p>
                <small>Hall, London , uk</small>
              </div>
            </div>
            <div className="flex shadow-md p-4 items-center gap-4">
              <div className=" border bg-[#E91E63] hover:bg-orange-600 h-12 p-2 rounded-full">
                <BsEnvelope className="text-3xl  text-white"></BsEnvelope>
              </div>
              <div>
                <h1 className="font-semibold">WHEN</h1>
                <p>Wednessday to thursday</p>
                <small>October, 06-10-23</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversion;
