import React, { useState } from "react";
const FunBTN = () => {
    const[Aval,SetAvali]=useState(2)
  const clickFU=() => {
    // SetAvali(Aval+1) //ravesh aval
    
   SetAvali((Aval)=>{   //ravesh dovom
       return Aval+1
   })
  };
  return (
    <div className={"classRAD"}>
      <p className={"pRadi"}>{Aval}</p>
      <button onClick={clickFU}>funcBTn</button>
    </div>
  );
};
export default FunBTN;
