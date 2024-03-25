import React, { useState, useEffect } from "react";
import InputScale from "../component/InputScale";
import Result from "../component/Result";

const Homepage = () => {
  var [scaleX, setScaleX] = useState("A");
  var [scaleY, setScaleY] = useState(4);
  var [standardFreq, setStandardFreq] = useState((440.0).toFixed(2));

  console.log(scaleX);
  console.log(scaleY);
  console.log(standardFreq);
  return (
    <div
      className="home"
      style={
        ({ minHeight: "90vh" },
        {
          background: "black",
        })
      }
    >
      <h1>Scale to Frequency</h1>
      <div>
        <InputScale
          scaleX={scaleX}
          setScaleX={setScaleX}
          scaleY={scaleY}
          setScaleY={setScaleY}
          standardFreq={standardFreq}
          setStandardFreq={setStandardFreq}
        />
      </div>
      <div>
        <Result
          scaleX={scaleX}
          setScaleX={setScaleX}
          scaleY={scaleY}
          setScaleY={setScaleY}
          standardFreq={standardFreq}
        />
      </div>
    </div>
  );
};

export default Homepage;
