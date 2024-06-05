import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

const AccountPage = () => {
  const [account, setAccount] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle account creation/editing
    alert("Account details updated!");
  };

  return (
    <Container className="account-page mt-5">
      <Row className="justify-content-center">
        <Col md="6">
          <h2 className="text-center mb-4">Account Details</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={account.name}
                onChange={handleChange}
                className="form-control"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={account.email}
                onChange={handleChange}
                className="form-control"
              />
            </FormGroup>
            <Button type="submit" color="primary" className="w-100">
              Save
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountPage;
