import { Link } from "react-router-dom";

const ShowCon = ({ show }) => {
  const { name, id, image, price, description } = show;
  // console.log(show);
  return (
    <div className="shadow p-5 rounded-md">
      <img className="w-full h-[200px] rounded shadow" src={image} alt="" />
      <h4 className="text-lg font-semibold mt-2 mb-3">{name}</h4>
      <p>{description.slice(0, 80)}..</p>
      <p className="font-semibold">Price: {price}$</p>
      <Link to={`/show/${id}`}>
        <button className="mt-4 px-7 py-2 rounded-full bg-[#E91E63] hover:bg-blue-700 text-white font-semibold">
          Details
        </button>
      </Link>
    </div>
  );
};

export default ShowCon;
