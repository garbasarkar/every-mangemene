import { useLoaderData } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Meeting = () => {
  const meetData = useLoaderData();
//   console.log(meetData);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className=" max-w-6xl mx-auto mt-5 ">
      <div className=" conference mb-20 ">
        <div data-aos="fade-up" className="text-center pt-40 mb-20">
          <h1 className="text-4xl font-semibold mb-2">7th Biggest</h1>
          <p className="text-6xl font-semibold mb-2">
            Business Conference 2024
          </p>
          <p>10 to 12 February, 2024</p>
          <button className=" mt-5 px-7 py-2 rounded-full text-white font-semibold bg-blue-600 hover:bg-red-600">
            Buy Now
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-20">
        {meetData.map((meet) => (
          <div key={meet.id}>
            <div
              data-aos="fade-up"
              className=" h-[290px] shadow p-5 rounded-md"
            >
              <img
                className="rounded w-full h-[200px]"
                src={meet.image}
                alt=""
              />
              <h1 className="text-lg font-semibold mt-2">{meet.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meeting;
