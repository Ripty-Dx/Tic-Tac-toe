import React, { useState } from "react";
import "./PlayerForm.css";
import Logo from "./Logo";
const PlayerForm = () => {
  const [submitClicked, setSubmitClicked] = useState(false);
  const [xColorPicked, setXColorPicked] = useState(true);
  const [oColorPicked, setOColorPicked] = useState(true);

  const [data, setData] = useState({
    xName: null,
    oName: null,
    xColor: "blue",
    oColor: "yellow",
  });
  const onSubmitName = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(data);
  const onSubmitForm = (event) => {
    event.preventDefault();
    // console.log("clicked submit", event);
    setSubmitClicked(true);
    document.getElementById("playerFormID").style.display = "none";
  };
  const colorValue = (e) => {
    e.preventDefault();
    // setXColorPicked(true);
    // setOColorPicked(true);
    // console.log("color clicked", e);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form className="p-5 container" id="playerFormID">
        <div className="row mb-3 justify-content-md-center ">
          <div className="col-md-3 mt-2">
            <label className="text-white col-form-label">Player X Name</label>
          </div>
          <div className="col-md-4 mt-2">
            <input
              type="text"
              className="form-control col-md-6"
              placeholder="Enter Player X Name"
              name="xName"
              onChange={onSubmitName}
            ></input>
          </div>
        </div>
        <div className="row mb-3 justify-content-md-center ">
          <div className="col-md-3 mt-2">
            <label className="text-white col-form-label">Choose Color</label>
          </div>
          <div className="col-md-4 mt-2">
            <div className="d-flex gap-3">
              <button
                className="form-control bg-blue color-button position-relative"
                name="xColor"
                value="blue"
                onClick={colorValue}
              >
                {xColorPicked ? (
                  data.xColor==="blue" ? (
                    <span className="badge bg-success position-absolute top-0 start-100 translate-middle badge rounded-pill">&#x2713;</span>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}{" "}
              </button>

              <button
                className="form-control bg-lightpink color-button position-relative"
                name="xColor"
                value="lightpink"
                onClick={colorValue}
              >
                {xColorPicked ? (
                  data.xColor ==="lightpink"? (
                    <span className="badge bg-success position-absolute top-0 start-100 translate-middle badge rounded-pill">&#x2713;</span>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </button>
              <button
                className="form-control bg-greenyellow color-button position-relative"
                name="xColor"
                value="greenyellow"
                onClick={colorValue}
              >
                {xColorPicked ? (
                  data.xColor==="greenyellow" ? (
                    <span className="badge bg-success position-absolute top-0 start-100 translate-middle badge rounded-pill">&#x2713;</span>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="row mb-3 justify-content-md-center ">
          <div className="col-md-3 mt-2">
            <label className="text-white col-form-label">Player O Name</label>
          </div>
          <div className="col-md-4 mt-2">
            <input
              type="text"
              className="form-control col-md-6"
              placeholder="Enter Player O Name"
              name="oName"
              onChange={onSubmitName}
            ></input>
          </div>
        </div>
        <div className="row justify-content-md-center mb-3">
          <div className="col-md-3 mt-2">
            <label className="text-white col-form-label">Choose Color</label>
          </div>
          <div className="col-md-4 mt-2">
            <div className="d-flex gap-3 ">
              <button
                className="form-control bg-yellow color-button position-relative"
                name="oColor"
                value="yellow"
                onClick={colorValue}
              >
                 {oColorPicked ? (
                  data.oColor==="yellow" ? (
                    <span className="badge bg-success position-absolute top-0 start-100 translate-middle badge rounded-pill">&#x2713;</span>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}{" "}
              </button>
              <button
                className="form-control bg-aquamarine color-button position-relative"
                name="oColor"
                value="aquamarine"
                onClick={colorValue}
              >
                   {oColorPicked ? (
                  data.oColor==="aquamarine" ? (
                    <span className="badge bg-success position-absolute top-0 start-100 translate-middle badge rounded-pill">&#x2713;</span>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}{" "}
              </button>
              <button
                className="form-control bg-deeppink color-button position-relative"
                name="oColor"
                value="deeppink"
                onClick={colorValue}
              >   {oColorPicked ? (
                data.oColor==="deeppink" ? (
                  <span className="badge bg-success position-absolute top-0 start-100 translate-middle badge rounded-pill">&#x2713;</span>
                ) : (
                  ""
                )
              ) : (
                ""
              )}{" "}</button>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center mt-3 ">
          <div className="mt-2 col-md-4">
            <div
              className="form-control btn btn-primary mt-4"
              onClick={onSubmitForm}
            >
              Submit
            </div>
          </div>
        </div>
      </form>
      {submitClicked ? (
        <Logo
          xName={data.xName}
          oName={data.oName}
          xColor={data.xColor}
          oColor={data.oColor}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default PlayerForm;
