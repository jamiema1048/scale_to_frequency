import React, { useState } from "react";

const InputScale = ({
  scaleX,
  setScaleX,
  scaleY,
  setScaleY,
  standardFreq,
  setStandardFreq,
}) => {
  const scaleXHandler = (e) => {
    setScaleX(e.target.value);
  };
  const scaleYHandler = (e) => {
    setScaleY(e.target.value);
  };
  const standardFreqHandler = (e) => {
    setStandardFreq(e.target.value);
  };
  return (
    <div className="scaleinput" style={{ color: "white" }}>
      <h2>Set the freguency of A4</h2>
      <div className="btn-area">
        <button onClick={standardFreqHandler} value="432.00">
          A4 = 432 Hz
        </button>
        <button onClick={standardFreqHandler} value="434.00">
          A4 = 434 Hz
        </button>
        <button onClick={standardFreqHandler} value="436.00">
          A4 = 436 Hz
        </button>
        <button onClick={standardFreqHandler} value="438.00">
          A4 = 438 Hz
        </button>
        <button onClick={standardFreqHandler} value="440.00">
          A4 = 440 Hz
        </button>
        <button onClick={standardFreqHandler} value="441.00">
          A4 = 441 Hz
        </button>
        <button onClick={standardFreqHandler} value="442.00">
          A4 = 442 Hz
        </button>
        <button onClick={standardFreqHandler} value="444.00">
          A4 = 444 Hz
        </button>
        <button onClick={standardFreqHandler} value="446.00">
          A4 = 446 Hz
        </button>
        <button onClick={standardFreqHandler} value="448.00">
          A4 = 448 Hz
        </button>
        <button onClick={standardFreqHandler} value="450.00">
          A4 = 450 Hz
        </button>
      </div>
      <div>
        <h2>Choose the scale</h2>
        <div className="btn-area">
          <button onClick={scaleXHandler} value="C">
            C
          </button>
          <button onClick={scaleXHandler} value="D♭">
            D♭
          </button>
          <button onClick={scaleXHandler} value="D">
            D
          </button>
          <button onClick={scaleXHandler} value="E♭">
            E♭
          </button>
          <button onClick={scaleXHandler} value="E">
            E
          </button>
          <button onClick={scaleXHandler} value="F">
            F
          </button>
          <button onClick={scaleXHandler} value="G♭">
            G♭
          </button>
          <button onClick={scaleXHandler} value="G">
            G
          </button>
          <button onClick={scaleXHandler} value="A♭">
            A♭
          </button>
          <button onClick={scaleXHandler} value="A">
            A
          </button>
          <button onClick={scaleXHandler} value="B♭">
            B♭
          </button>
          <button onClick={scaleXHandler} value="B">
            B
          </button>
        </div>
        <div className="btn-area">
          <button onClick={scaleYHandler} value="0">
            0
          </button>
          <button onClick={scaleYHandler} value="1">
            1
          </button>
          <button onClick={scaleYHandler} value="2">
            2
          </button>
          <button onClick={scaleYHandler} value="3">
            3
          </button>
          <button onClick={scaleYHandler} value="4">
            4
          </button>
          <button onClick={scaleYHandler} value="5">
            5
          </button>
          <button onClick={scaleYHandler} value="6">
            6
          </button>
          <button onClick={scaleYHandler} value="7">
            7
          </button>
          <button onClick={scaleYHandler} value="8">
            8
          </button>
          <button onClick={scaleYHandler} value="9">
            9
          </button>
          <button onClick={scaleYHandler} value="10">
            10
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputScale;
