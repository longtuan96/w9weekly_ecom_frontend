import React from "react";
import { Container, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
const WelcomeSection = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };
  return (
    <div className="homePage">
      <Container
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Card style={{ width: "18rem", borderRadius: "10px" }}>
          {isAuthenticated ? (
            <Card.Body>
              <h2>{`Welcome ${user.name}`}</h2>
              <h1>Enjoy the foods</h1>
            </Card.Body>
          ) : (
            <Card.Body>
              <h2>Hello</h2>
              <h1>Please login to order my food</h1>
              <button className="btn-green" onClick={handleLogin}>
                Login
              </button>
            </Card.Body>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default WelcomeSection;
