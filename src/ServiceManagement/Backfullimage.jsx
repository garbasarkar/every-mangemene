import backim from "/src/images/sponser/conBk.avif";

const Backfullimage = () => {
  return (
    <div className="mt-20 mb-20 relative opacity-60 w-full h-[500px] bg-[url('/src/images/sponser/conBk.avif')]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 px-5">
        <div className="flex-1">
          <h1 className="text-white text-4xl font-semibold">
            Biggest Business Meetup Get Your <br /> Business Idea!
          </h1>
          <p className="text-white mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque
            dolore excepturi <br /> molestiae quaerat dicta eum labore dolor
            accusantium magni?
          </p>
          <button className="mt-5 px-7 py-2 rounded-full bg-[#E91E63] hover:bg-blue-700 text-white font-semibold">
            Read More..
          </button>
        </div>
        <div className="flex-1  mt-10">
          <div className=" p-8 w-2/3 shadow-md bg-white">
            <h1 className=" text-4xl font-semibold text-black">
              <span className="text-[#E91E63]">Get your seat</span> Now, There
              are Limitations.
            </h1>
            <p className="mt-2 mb-5">
              This place is free for you to reachers your business with skill
              business man.
            </p>
            <input
              className="w-full py-2 border "
              type="text"
              name=""
              id="name"
              placeholder="Your Name"
            />
            <input
              className="w-full py-2 border mt-3"
              type="text"
              name=""
              id="email"
              placeholder="Your Email"
            />
            <textarea
              className="w-full border h-10 mt-3"
              name=""
              id=""
              cols="10"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className="mt-4 px-7 py-2 rounded-full bg-[#E91E63] hover:bg-blue-700 text-white font-semibold">
              Send
            </button>
            <div className="flex gap-5 mt-5">
              <h1>Need any help?</h1>
              <h2 className="text-blue-700">Call Us: +120 02435 8901</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backfullimage;
