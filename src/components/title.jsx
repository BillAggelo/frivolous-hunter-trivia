import * as React from "react";
import { BsFillQuestionSquareFill } from "react-icons/bs";

const Title = () => {
  return (
    <div className="mt-3 mb-3" style={{ textAlign: "center" }}>
      <h1 style={{ fontWeight: "bold", fontFamily: "Segoe Print" }}>
        <BsFillQuestionSquareFill style={{ marginRight: "15px" }} />
        Frivolous Hunter
      </h1>
    </div>
  );
};

export default Title;
