import React from "react";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import authActions from "../redux/actions/auth.actions";
import { routeActions } from "../redux/actions/route.actions";
const RegisterPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const loading = useSelector((state) => state.auth.loading);

  //Form Data  for registration
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    avatarUrl: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  //Handle functions
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password2, avatarUrl } = formData;
    if (password !== password2) {
      setErrors({ ...errors, password2: "Passwords do not match" });
      return;
    }

    dispatch(authActions.register(name, email, password, avatarUrl));
  };
  useEffect(() => {
    if (redirectTo) {
      if (redirectTo === "__GO_BACK__") {
        history.goBack();
        dispatch(routeActions.removeRedirectTo());
      } else {
        history.push(redirectTo);
        dispatch(routeActions.removeRedirectTo());
      }
    }
  }, [dispatch, history, redirectTo]);

  return (
    // <div className="authPage">
    //   <div className="authCard">
    //     <Card>
    //       <Card.Header>Featured</Card.Header>
    //       <Card.Body>
    //         <Form onSubmit={handleSubmit}>
    //           <Form.Group controlId="formBasicEmail">
    //             <Form.Label>Name</Form.Label>
    //             <Form.Control
    //               type="email"
    //               placeholder="Enter Your name"
    //               name="name"
    //               onChange={handleChange}
    //             />
    //           </Form.Group>
    //           <Form.Group controlId="formBasicEmail">
    //             <Form.Label>Email address</Form.Label>
    //             <Form.Control
    //               type="email"
    //               placeholder="Enter email"
    //               name="email"
    //               onChange={handleChange}
    //             />
    //           </Form.Group>

    //           <Form.Group controlId="formBasicPassword">
    //             <Form.Label>Password</Form.Label>
    //             <Form.Control
    //               type="password"
    //               placeholder="Password"
    //               name="password1"
    //               onChange={handleChange}
    //             />
    //           </Form.Group>
    //           <Form.Group controlId="formBasicPassword">
    //             <Form.Label>Password</Form.Label>
    //             <Form.Control
    //               type="password"
    //               placeholder="Confirm password"
    //               name="password2"
    //               onChange={handleChange}
    //             />
    //           </Form.Group>

    //           <Button variant="primary" type="Login">
    //             Submit
    //           </Button>
    //         </Form>
    //       </Card.Body>
    //     </Card>
    //   </div>
    // </div>
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="text-center mb-3">
            <h1 className="text-primary">Sign Up</h1>
            <p className="lead">
              <FontAwesomeIcon icon="user" size="1x" /> Create Your Account
            </p>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Avatar"
                name="avatarUrl"
                value={formData.avatarUrl}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <small className="form-text text-danger">{errors.name}</small>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <small className="form-text text-danger">{errors.email}</small>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <small className="form-text text-danger">
                  {errors.password}
                </small>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
              />
            </Form.Group>

            {loading ? (
              <Button
                className="btn-block"
                variant="primary"
                type="button"
                disabled
              >
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </Button>
            ) : (
              <Button className="btn-block" type="submit" variant="primary">
                Register
              </Button>
            )}

            <p>
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
