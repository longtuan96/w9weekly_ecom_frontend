import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
const NavBarUser = () => {
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const handleClick = () => {
    history.push("/user/cart");
  };
  return (
    <>
      {!loading ? (
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: "20%" }}
        >
          <a href onClick={handleClick} style={{ cursor: "pointer" }}>
            Cart
          </a>
          {`Welcome, ${user.name}`}
          <FontAwesomeIcon icon={["fas", "sign-out-alt"]} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NavBarUser;
