import { useLoaderData, useParams } from "react-router-dom";

import NewsCard from "../NewsCard/NewsCard.jsx";
import useTitle from "../../../useHooks/useHooks.js";
const Category = () => {
  useTitle("category");

  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      {id && <h2>This is Category News:{categoryNews.length}</h2>}
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
