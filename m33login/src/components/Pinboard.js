import { useEffect, useState } from "react";
import { fetchPicsum } from "../utils";

export const Pinboard = () => {
  //states
  const [page, setPage] = useState();
  const [picArr, setPicArr] = useState([]);
  try {
    useEffect(() => {
      fetchPicsum(page, setPicArr);
    }, [page]);

    return <div>{picArr.map((pic) => pic.url)}</div>;
  } catch (err) {
    console.log(err.message);
    return <div></div>;
  }
};
