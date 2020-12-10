import React from "react";
import Header from "./Header";
import Main from "./Main";
import Section from "./Section";
import ClassBTN from "./ClassBTN";
import FunBTN from "./FunBTN";
const App = () => {
  return (
    <div>
      <div className={"RadFL"}>
        <Header />
        {/* main */}
        <Main />
        <div className={"dokmeha"}>
        <ClassBTN/>
        <FunBTN/>
        </div>
      </div>
     <Section/>
    </div>
  );
};
export default App;
