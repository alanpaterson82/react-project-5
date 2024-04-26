import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>register</h1>

          <Form>
  <Form.Group controlId="username">
    <Form.Label className="d-none">username</Form.Label>
    <Form.Control type="text" placeholder="Username" name="username" />
  </Form.Group>

  <Form.Group controlId="password1">
    <Form.Label className="d-none">Password</Form.Label>
    <Form.Control
        type="password"
        placeholder="Password"
        name="password1"
    />
  </Form.Group>

  <Form.Group controlId="password2">
    <Form.Label className="d-none">Re-enter your password</Form.Label>
    <Form.Control
        type="password"
        placeholder="Re-enter your password"
        name="password2"
    />
  </Form.Group>

  <Button 
        className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
        type="submit">
    R E G I S T E R
  </Button>
</Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/login">
            Already a burger lover? <span>Login</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero2.jpg"
          }
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;