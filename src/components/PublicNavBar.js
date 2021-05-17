import React from "react";

import logo from "../images/siris.svg";
import githubIco from "../images/github_icon.png";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import NavBarUser from "./NavBarUser";

const PublicNavbar = () => {
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  //handle functions
  const handleLogin = () => {
    history.push("/login");
  };
  return (
    <div className="NavBar">
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <img src={logo} alt="SIRIS FOOD" width="200px" />
        </div>

        {isAuthenticated ? (
          <NavBarUser />
        ) : (
          <button className="btn-white" onClick={handleLogin}>
            Login
          </button>
        )}
      </Container>
    </div>
  );
};

export default PublicNavbar;
