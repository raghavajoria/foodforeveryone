import React, { useState } from "react";

export default function Registeration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    city: "",
    state: "",
    zip: "",
    agree: false,
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Check if form is valid
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // Handle the form submission logic here
      console.log("Form data submitted:", formData);
    }

    setValidated(true);
  };

  return (
    <div>
      <form
        className={`row g-3 needs-validation ${
          validated ? "was-validated" : ""
        }`}
        noValidate
        onSubmit={handleSubmit}
      >
        {/* First Name Field */}
        <div className="col-md-4">
          <label htmlFor="firstName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please enter your first name.</div>
          <div className="valid-feedback">Looks good!</div>
        </div>

        {/* Last Name Field */}
        <div className="col-md-4">
          <label htmlFor="lastName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please enter your last name.</div>
          <div className="valid-feedback">Looks good!</div>
        </div>

        {/* Username Field */}
        <div className="col-md-4">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              className="form-control"
              id="username"
              value={formData.username}
              onChange={handleChange}
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>

        {/* City, State, and Zip Fields */}
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>

        <div className="col-md-3">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <select
            className="form-select"
            id="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Choose...
            </option>
            {/* State options */}
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>

        <div className="col-md-3">
          <label htmlFor="zip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="agree">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}
