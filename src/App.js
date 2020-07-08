import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Users from "./Components/users/Users";
import User from "./Components/users/User";
import Navbar from "./Components/layout/Navbar";
import axios from "axios";
import Search from "./Components/users/Search";
import Alert from "./Components/layout/Alert";
import { About } from "./Components/pages/About";
import NotFound from "./Components/pages/Notfound";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const searchUsers = (text) => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((res) => {
        setUsers(res.data.items);
        setLoading(false);
      });
  };

  const getUser = async (login) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUser(res.data);
    setLoading(false);
  };

  const getRepos = async (login) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setRepos(res.data);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  //*! fire of something when the component loads like fetch some data from an api

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <Alert alert={alert}></Alert>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={showAlert}
                  ></Search>

                  <Users loading={loading} users={users}></Users>
                </Fragment>
              )}
            ></Route>
            <Route exact path="/about" component={About}></Route>

            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={getUser}
                  user={user}
                  getRepos={getRepos}
                  repos={repos}
                  loading={loading}
                ></User>
              )}
            ></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
