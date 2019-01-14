import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

const Contact = () => (
  <BaseLayout>
    <BasePage title="Get in touch">
      <p>
        Mandatory fields are marked with <span className="accent">*</span>
      </p>
      <Form>
        <FormGroup row>
          <Label for="name" sm={2}>
            Name <span className="accent">*</span>
          </Label>
          <Col sm={10} md={6}>
            <Input type="text" name="name" id="name" placeholder="Full Name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={2}>
            Email <span className="accent">*</span>
          </Label>
          <Col sm={10} md={6}>
            <Input
              type="email"
              name="email"
              id="emailAddress"
              placeholder="Email Address"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="subject" sm={2}>
            Subject <span className="accent">*</span>
          </Label>
          <Col sm={10} md={6}>
            <Input type="select" name="subject" id="subject">
              <option>Freelance Enquiry</option>
              <option>Work Offer</option>
              <option>Other</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Message <span className="accent">*</span>
          </Label>
          <Col sm={10} md={6}>
            <Input type="textarea" name="message" id="message" rows="5" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 2, offset: 10 }} md={{ size: 2, offset: 6 }}>
            <Button color="secondary" block>
              Submit &raquo;
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </BasePage>
  </BaseLayout>
);

export default Contact;
