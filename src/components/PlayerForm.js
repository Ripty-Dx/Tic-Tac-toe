import React, { useState } from "react";
import "./PlayerForm.css";
const PlayerForm = () => {
  const [data, setData] = useState({
    xName: "",
    oName: "",
  });
  const onSubmitName=(e)=>{
       setData({
        ...data,
        [e.target.name]:e.target.value
       })
  }
  console.log(data);
  return (
    <>
      <form className="p-5">
        <div className="row mb-3 ">
          <div className="col-md-2 mt-3">
            <label className="col-form-label">Player X Name</label>
          </div>
          <div className="col-md-3 mt-3">
            <input
              type="text"
              className="form-control col-md-6"
              placeholder="Enter Player X Name"
              name="xName"
              onChange={onSubmitName}
            ></input>
          </div>
        </div>
        <div className="row mb-3 mt-3">
          <div className="col-md-2 mt-3">
            <label className="col-form-label">Choose Color</label>
          </div>
          <div className="col-md-3 mt-3">
            <div className="d-flex gap-3">
              <button className="form-control bg-blue color-button"> </button>
              <button className="form-control bg-danger color-button"></button>

              <button className="form-control bg-primary color-button"></button>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-2 mt-3">
            <label className="col-form-label">Player O Name</label>
          </div>
          <div className="col-md-3 mt-3">
            <input
              type="text"
              className="form-control col-md-6"
              placeholder="Enter Player O Name"
              name="oName"
              onChange={onSubmitName}
            ></input>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-2 mt-3">
            <label className="col-form-label">Choose Color</label>
          </div>
          <div className="col-md-3 mt-3">
            <div className="d-flex gap-3 ">
              <button className="form-control bg-yellow color-button"></button>
              <button className="form-control bg-secondary color-button"></button>
              <button className="form-control bg-success color-button"></button>
            </div>
          </div>
        </div>
        <div className="row mb-3 ">
          <div className="mt-3 col-md-1"></div>{" "}
          <div className="mt-3 col-md-2">
            <button className="form-control btn btn-primary ">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlayerForm;
