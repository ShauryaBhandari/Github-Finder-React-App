import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <h3 className="mr-auto pl-2">
      <a
        className="btn1 btn btn-outline-dark  btn-block font"
        href={repo.html_url}
      >
        {repo.name}
      </a>
    </h3>
  );
};

RepoItem.PropTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
