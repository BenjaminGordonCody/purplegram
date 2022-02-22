import { useEffect, useState } from "react";
import { fetchPicsum } from "../utils";
import { Image } from "./Image";

export const Pinboard = () => {
  //states
  const [page, setPage] = useState();
  const [picArr, setPicArr] = useState([]);
  try {
    useEffect(() => {
      fetchPicsum(page, setPicArr);
    }, [page]);

    return (
      <div id="pinboard">
        {picArr.map((pic, index) => (
          <Image url={pic.download_url} index={index} />
        ))}
      </div>
    );
  } catch (err) {
    console.log(err.message);
    return <div></div>;
  }
};
