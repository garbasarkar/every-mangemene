import { useLoaderData, useParams } from "react-router-dom";

const DetalisPro = () => {
  const { id } = useParams();
  const loadData = useLoaderData();
  const singleData = loadData.find((singleItem) => singleItem.id == id);
  console.log(id, loadData, singleData);
  return <div></div>;
};

export default DetalisPro;
