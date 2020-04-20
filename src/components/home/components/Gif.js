import React from "react";
import GifLoading from "./loading.gif";

function Gif() {
  return (
    <div>
      <img
        src={GifLoading}
        style={{ width: "150px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
}

export default Gif;
