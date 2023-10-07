import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DetalisPro = () => {
  const [opSinData, setOpSinData] = useState([]);
  const { id } = useParams();
  const loadData = useLoaderData();
  const singleData = loadData.find((singleItem) => singleItem.id == id);
  //   console.log(id, loadData, singleData);

  useEffect(() => {
    fetch(`/SingleService.json`)
      .then((res) => res.json())
      .then((data) => setOpSinData(data));
  }, []);
  console.log(opSinData);
  return (
    <div className="max-w-4xl mx-auto mt-10 mb-20">
      <img
        className="w-full h-[300px] rounded shadow-md"
        src={singleData.image}
        alt=""
      />
      <h1 className="text-lg font-semibold mt-2 mb-3">{singleData.name}</h1>
      <p>{singleData.description}</p>
      <p className=" mt-1 font-semibold">Price: {singleData.price}$</p>
      <button className="mt-5 text-lg text-white font-semibold px-6 py-2 rounded bg-[#E91E63]">
        Buy Now
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-40">
        {opSinData.map((opData) => (
          <div key={opData.id}>
            <div className="shadow-md rounded-md p-5">
              <img className="shadow rounded" src={opData.image} alt="" />
              <h1 className="font-semibold text-lg mt-2 mb-3">{opData.name}</h1>
              <p>{opData.short_description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetalisPro;
