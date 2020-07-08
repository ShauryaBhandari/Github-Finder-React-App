import React from "react";
import Spinner from "../layout/Spinner";
import { PropTypes } from "prop-types";
import UserItem from "./UserItem";

function Users({ users, loading }) {
  if (loading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div className="row">
        {users.map((user) => (
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <UserItem className="" key={user.id} user={user}>
              {user.login}
            </UserItem>
          </div>
        ))}
      </div>
    );
  }
}

Users.PropTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
