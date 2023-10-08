import sponser1 from "/src/images/sponser/sponser1.webp";
import sponser2 from "/src/images/sponser/sponser2.webp";
import sponser3 from "/src/images/sponser/sponser3.webp";
import sponser4 from "/src/images/sponser/sponser4.webp";
import sponser5 from "/src/images/sponser/sponser5.webp";
import sponser6 from "/src/images/sponser/2.png";
import sponser7 from "/src/images/sponser/4.png";

const PathnerShift = () => {
  return (
    <div className="max-w-6xl px-4 md:px-0 mx-auto text-center mt-20">
      <p className="text-lg text-[#E91E63]">OUR PARTHNERS</p>
      <h1 className="text-4xl font-semibold mb-2">
        SPONSERS AND <span className="text-[#E91E63]">PARTHNERS</span>
      </h1>
      <p>
        Excepteur sint accaecat cupidatau non proident, sunt in culpa qui
        officail deserunt mollit <br /> anim id est laborum.
      </p>

      <div className="grid grid-cols-2 text-center md:grid-cols-4 lg:grid-cols-5 gap-8 mt-10">
        <img className="w-32 h-32" src={sponser1} alt="" />
        <img className="w-32 h-32" src={sponser2} alt="" />
        <img className="w-32 h-32" src={sponser3} alt="" />
        <img className="w-32 h-32" src={sponser4} alt="" />
        <img className="w-32 h-32" src={sponser2} alt="" />
        <img className="w-32 h-32" src={sponser5} alt="" />
        <img className="w-32 h-32" src={sponser1} alt="" />
        <img className="w-32 h-32" src={sponser3} alt="" />
        <img className="w-32 h-32" src={sponser6} alt="" />
        <img className="w-32 h-32" src={sponser7} alt="" />
      </div>
      <button className="mt-10 text-lg text-white font-semibold px-6 py-2 rounded-full bg-[#E91E63]">
        VEW MORE SPONSERS
      </button>
    </div>
  );
};

export default PathnerShift;
