import React from "react";
const BtnInp = () => {
  const clickME = (e) => {
    const Begir = document.getElementById("MyINP").value;
    console.log(Begir);
  };
  return (
    <div>
      <input id={"MyINP"} placeholder={"benevis"}></input>
      <button className={"btnRad"} onClick={clickME}>
        click me
      </button>
    </div>
  );
};

export default BtnInp;
