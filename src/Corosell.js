import { Button } from "@mui/material";
import { useState, useEffect } from "react";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import BedtimeIcon from "@mui/icons-material/Bedtime";

export function Corosell() {
  const imgArr = [
    "https://wallpapers.com/images/high/master-vijay-hd-3d-cat-qh9qikwwcud18iix.webp",
    "https://wallpapers.com/images/high/master-vijay-hd-in-the-streets-0coivjrcg456lrfr.webp",
    "https://wallpapers.com/images/high/master-vijay-hd-wall-paint-1qselpopgutvb55t.webp",
  ];

  const [index, setIndex] = useState(0);
  const move = (direction) => {
    if (direction === "next") {
      setIndex(imgArr.length - 1 === index ? 0 : index + 1);
    } else {
      setIndex(index === 0 ? imgArr.length - 1 : index - 1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      move("next");
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div
      className="container"
      style={{
        height: "100px",
        width: "40vw",
        display: "flex",
        borderRadius: "50px",
        margin: "10px",
        boxShadow: " 10px 10px 5px 0px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Button onClick={() => move("next")} className="overlay right">
        <ArrowCircleRightIcon />
      </Button>
      <img
        style={{ height: "30vh", width: "40vw" }}
        src={`${imgArr[index]}?w=161&fit=crop&auto=format`}
        loading="lazy"
      />
      <div className="overlay indicator">
        {imgArr.map((a, i) => {
          return (
            <div>
              <BedtimeIcon className={i === index ? "active" : "null"} />
            </div>
          );
        })}
      </div>

      <Button onClick={() => move("previous")} className="overlay left">
        <ArrowCircleLeftIcon />
      </Button>
    </div>
  );
}
