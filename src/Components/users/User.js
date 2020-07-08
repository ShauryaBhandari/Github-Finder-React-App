import React, { Fragment, useEffect } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";

const User = ({ user, loading, getUser, getRepos, repos, match }) => {
  useEffect(() => {
    getUser(match.params.login); //extract login parameter form the URL in the browser
    getRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = user;

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <Fragment>
      <div className="card card-custom text-center container" style={{}}>
        <Link
          to="/"
          className="btn btn1 btn-outline-dark btn-block ml-auto mt-4 mr-4 font"
        >
          BACK TO SEARCH &nbsp;&nbsp;
          <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
        </Link>
        <div className="row">
          <div className="col-6">
            <img
              className="card-img-top rounded-circle mx-auto my-2"
              src={avatar_url}
              alt="Card image cap"
              style={{ height: "200px", width: "200px" }}
            ></img>
            <p className="text-center mt-2 h2 underline">
              Hireable: {""}
              {hireable ? (
                <i
                  className="fa fa-check-circle text-success"
                  aria-hidden="true"
                ></i>
              ) : (
                <i
                  className="fa fa-times-circle text-danger"
                  aria-hidden="true"
                ></i>
              )}{" "}
            </p>
            <div className="card-body">
              <h1 className="card-title">{name}</h1>
              <h2>
                <strong className="underline">HANDLE:</strong> {login}
              </h2>
              <p className="font">
                <strong className="underline">LOCATION:</strong> {location}
              </p>
            </div>
          </div>

          <div className="col-6 center mt-auto mb-auto">
            {bio && (
              <Fragment>
                <div className="customdiv">
                  <h2>
                    <strong className="underline">ABOUT</strong>
                  </h2>
                  <p className="font">{bio}</p>
                </div>
              </Fragment>
            )}
            <a
              href={html_url}
              target="_blank"
              className="btn btn1 btn-block btn-outline-dark font mt-2"
            >
              GITHUB PROFILE
            </a>
            <ul>
              <li>
                {company && (
                  <Fragment>
                    <h2 className="mt-3">
                      <strong className="underline">COMPANY</strong>
                    </h2>
                    <p className="font">{company}</p>
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <h2>Website</h2>
                    <p className="font">{blog}</p>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card card-custom mt-2 font text-center container">
        <div className="row">
          <div className="badge badge-primary mr-5">Followers: {followers}</div>
          <div className="badge mr-5 badge-success">Following: {following}</div>
          <div className="badge mr-5 badge-danger">
            Public Repos: {public_repos}
          </div>
          <div className="badge mr-5 badge-dark">
            Public Gists: {public_gists}
          </div>
        </div>
        <h3 className="mr-auto pl-2 mt-5">
          <strong className="underline">Repos:</strong>
        </h3>
        <Repos repos={repos}></Repos>
      </div>
    </Fragment>
  );
};

User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};

export default User;
