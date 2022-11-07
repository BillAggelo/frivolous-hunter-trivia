import * as React from "react";
import { MdCelebration } from "react-icons/md";

export default function Result(props: any) {
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row text-center">
          <h2 style={{ fontWeight: "bold", fontFamily: "Segoe Print" }}>
            <MdCelebration size={40} style={{ marginRight: "15px" }} />
            Congratulations!!
            <MdCelebration size={40} style={{ marginLeft: "15px" }} />
          </h2>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p
              className="lead px-md-6 mb-2 mt-4"
              style={{ fontWeight: "bold", fontFamily: "Segoe Print" }}
            >
              Correct answers {props.correctAnswerCount}/{props.questionsCount}
            </p>
          </div>
        </div>
        <div className="mb-3" style={{ textAlign: "center" }}>
          <div className="row pl-2 pr-2 mb-2 mt-2 justify-content-center">
            <div className="col-6 col-sm-4 mb-2">
              <div className="item">
                <div className="card">
                  <div className="card-body pt-2">
                    <h2
                      className="card-title"
                      style={{
                        fontWeight: "bold",
                        fontFamily: "Segoe Print",
                      }}
                    >
                      Your score is:
                    </h2>
                    <h1
                      style={{
                        fontWeight: "bold",
                        fontFamily: "Segoe Print",
                        fontSize: 40,
                      }}
                    >
                      {props.score}
                    </h1>
                  </div>
                  <div
                    className="card-footer"
                    style={{
                      fontWeight: "bold",
                      fontFamily: "Segoe Print",
                      backgroundColor: "#E1F7D5",
                    }}
                  >
                    <div className="row justify-content-center">
                      Correct answers:
                    </div>
                    <div className="row justify-content-center">
                      {props.easyCounter} easy x15 * seconds left
                    </div>
                    <div className="row justify-content-center">
                      {props.mediumCounter} medium x18 * seconds left
                    </div>
                    <div className="row justify-content-center">
                      {props.hardCounter} hard x25 * seconds left
                    </div>
                    <div className="row justify-content-center">
                      Total: {props.score}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
