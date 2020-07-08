import React from "react";

const Alert = ({ alert }, props) => {
  return (
    alert !== null && (
      <div className="alert alert-danger alert1">
        <i className="fa fa-info-circle"></i>
        &nbsp;&nbsp;{alert.msg}
        <i className="fa fa-times" style={{ float: "right" }}></i>
      </div>
    )
  );
};

export default Alert;
