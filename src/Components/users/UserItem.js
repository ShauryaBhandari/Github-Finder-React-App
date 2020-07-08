import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem(props) {
  const { login, avatar_url, html_url } = props.user;
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
        <div
          className="card card-custom text-center container"
          style={{ width: "15rem" }}
        >
          <img
            className="card-img-top rounded-circle mx-auto my-2"
            src={avatar_url}
            alt="Card image cap"
            style={{ height: "100px", width: "100px" }}
          ></img>
          <div className="card-body">
            <h3 className="card-title">{login}</h3>

            <Link to={`/user/${login}`} className="btn btn1 btn-dark btn-block">
              Get GitHub Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
