import React from "react";
import "./Profile.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="container111">
      <Row className="justify-content-center">
        <Col md={"10"}>
          <Form>
            <h2 className="loggg">Login</h2>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="baton">
              <Link to="/"> Login</Link>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
