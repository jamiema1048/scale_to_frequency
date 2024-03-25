import React, { useState, useEffect } from "react";

const Result = ({ scaleX, setScaleX, scaleY, setScaleY, standardFreq }) => {
  console.log(scaleX);
  console.log(scaleY);
  console.log(scaleX + scaleY);
  console.log(standardFreq);
  let xValue; //Count the scale's index of ascending
  let scaleArr = [
    "C",
    "D♭",
    "D",
    "E♭",
    "E",
    "F",
    "G♭",
    "G",
    "A♭",
    "A",
    "B♭",
    "B",
  ];
  for (let i = 0; i < scaleArr.length; i++) {
    if (scaleX == scaleArr[i]) {
      xValue = i;
    }
  }
  console.log(xValue);
  let p = xValue - 9 + (scaleY - 4) * 12; //Count how much chromatic scale apart from A4
  console.log(p);
  let freq = (standardFreq * Math.pow(2, p / 12)).toFixed(2);
  console.log(freq);
  return (
    <div className="result" style={{ color: "white" }}>
      <h3 id="gpa-text">Frequency of </h3>
      <h2 id="result-freq"> {scaleX + scaleY} </h2> <h3 id="gpa-text">is</h3>
      <h2 id="result-freq">{freq}</h2>
      <h3 id="gpa-text">Hz</h3>
    </div>
  );
};

export default Result;
