import { useLoaderData } from "react-router-dom";

const Meeting = () => {
  const meetData = useLoaderData();
  console.log(meetData);
  return (
    <div className=" conference max-w-6xl mx-auto mt-5 mb-20 ">
      <div className="text-center pt-40">
        <h1 className="text-4xl font-semibold mb-2">7th Biggest</h1>
        <p className="text-6xl font-semibold mb-2">Business Conference 2024</p>
        <p>10 to 12 February, 2024</p>
        <button className=" mt-5 px-7 py-2 rounded-full text-white font-semibold bg-blue-600 hover:bg-red-600">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Meeting;
