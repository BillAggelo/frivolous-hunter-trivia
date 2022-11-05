import React, { Component } from "react";
import { BsFillQuestionSquareFill } from "react-icons/bs";

const Title = () => {
  return (
    <div className="mt-3 mb-3" style={{ textAlign: "center" }}>
      <h2>
        <BsFillQuestionSquareFill style={{ marginRight: "15px" }} />
        Frivolous Hunter
      </h2>
    </div>
  );
};

export default Title;