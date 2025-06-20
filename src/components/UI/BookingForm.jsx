import React, { useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import axios from "axios"; // Importing axios for making HTTP requests
import "../../styles/booking-form.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    fromAddress: "",
    toAddress: "",
    numberOfPersons: "1",
    luggageColor: "Red",
    journeyDate: "",
    journeyTime: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/bookings/submit", // Backend endpoint
        formData
      );
      console.log(response.data); // If successful, show response data
      alert("Booking submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        fromAddress: "",
        toAddress: "",
        numberOfPersons: "1",
        luggageColor: "Red",
        journeyDate: "",
        journeyTime: "",
        message: "",
      }); // Reset form after submission
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Failed to submit booking. Please try again.");
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <Input
          type="number"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Input
          type="text"
          name="fromAddress"
          placeholder="From Address"
          value={formData.fromAddress}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <Input
          type="text"
          name="toAddress"
          placeholder="To Address"
          value={formData.toAddress}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select
          name="numberOfPersons"
          value={formData.numberOfPersons}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5+">5+</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select
          name="luggageColor"
          value={formData.luggageColor}
          onChange={handleChange}
        >
          <option value="Red">Red</option>
          <option value="Black">Black</option>
          <option value="Grey">Grey</option>
          <option value="Blue">Blue</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Input
          type="date"
          name="journeyDate"
          placeholder="Journey Date"
          value={formData.journeyDate}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <Input
          type="time"
          name="journeyTime"
          placeholder="Time"
          value={formData.journeyTime}
          onChange={handleChange}
          className="time__picker"
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          name="message"
          className="textarea"
          placeholder="Write any message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </FormGroup>

      <button className="contact__btn" type="submit">
        Submit Booking
      </button>
    </Form>
  );
};

export default BookingForm;
