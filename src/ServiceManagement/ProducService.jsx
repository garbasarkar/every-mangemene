import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowCon from "./ShowCon";
import Aos from "aos";
import "aos/dist/aos.css";

const ProducService = () => {
  const [store, setStore] = useState([]);
  const load = useLoaderData();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    fetch(`/ProService.json`)
      .then((res) => res.json())
      .then((data) => setStore(data));
  }, []);
  //   console.log(load, store);
  return (
    <div className="max-w-6xl mx-auto mt-20 ">
      <div data-aos="fade-down">
        <h1 className="text-5xl font-semibold mb-2 text-[#E91E63]">
          Our Services!
        </h1>
        <p className="mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
          voluptate ipsam sapiente, enim ipsum quae accusantium <br /> saepe
          doloribus! Officia, laboriosam veniam! Soluta nemo doloremque eos?
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {store.map((item) => (
          <ShowCon key={item.id} show={item}></ShowCon>
        ))}
      </div>
    </div>
  );
};

export default ProducService;
