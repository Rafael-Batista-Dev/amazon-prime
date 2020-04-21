import React from "react";
import GifLoading from "./loading.gif";

function Gif() {
  return (
    <div>
      <img
        src={GifLoading}
        style={{
          width: "100px",
          margin: "auto",
          marginTop: "20rem",
          display: "block",
        }}
        alt="Loading..."
      />
    </div>
  );
}

export default Gif;
