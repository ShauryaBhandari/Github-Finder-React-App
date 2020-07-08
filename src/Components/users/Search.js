import React, { useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");

  return (
    <div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          if (text === "") {
            props.setAlert("Enter something first!", "danger");
          } else {
            props.searchUsers(text);
            setText("");
          }
        }}
      >
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <button
              className="btn btn-dark"
              style={{ cursor: "default" }}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <i className="fa fa-user" aria-hidden="true"></i>
            </button>
          </div>

          <input
            type="text"
            placeholder="Search GitHub Username"
            className="form-control"
            id="usr"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              e.preventDefault();
            }}
          ></input>

          <div className="input-group-append">
            <input
              className="btn btn-success"
              value="Search"
              type="submit"
            ></input>
          </div>
          {props.showClear && (
            <div className="input-group-append">
              <input
                className="btn btn-danger"
                value="Clear"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  props.clearUsers();
                }}
              ></input>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
