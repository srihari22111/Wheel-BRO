import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios from "axios";
import "../styles/contact.css";

const Contact = () => {
  // Define state for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending POST request to backend
      const response = await axios.post("http://localhost:8080/api/contacts/submit", formData);

      // Display success message
      alert(response.data);
      setFormData({ name: "", email: "", message: "" }); // Clear form fields after submission
    } catch (error) {
      // Display error message
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form onSubmit={handleSubmit}>
                <FormGroup className="contact__form">
                  <Input
                    name="name"
                    value={formData.name}
                    placeholder="Your Name"
                    type="text"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    type="email"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Message"
                    value={formData.message}
                    className="textarea"
                    onChange={handleChange}
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  123 Coimbatore, Tamil Nadu.
                </p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+91 98989898</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">Wheelbro23@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>
                {/* Social Media Links */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
