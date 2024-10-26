import React, { useState } from "react";
import "./donate.css";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    donationType: "Food Donation",
    amount: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to the server)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="donate-container">
      <h2>Make a Donation</h2>
      <div className="donate-categories">
        <div className="category">
          <h3>Food Donation</h3>
          <p>Help us provide meals to those in need.</p>
        </div>
        <div className="category">
          <h3>Buy Clothes for Children</h3>
          <p>Support underprivileged children by donating clothes.</p>
        </div>
        <div className="category">
          <h3>Relief Fund</h3>
          <p>
            Contribute to relief efforts for flood and natural calamity victims.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="donation-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Donation Type</label>
          <select
            name="donationType"
            value={formData.donationType}
            onChange={handleChange}
            required
          >
            <option value="Food Donation">Food Donation</option>
            <option value="Buy Clothes for Children">
              Buy Clothes for Children
            </option>
            <option value="Relief Fund">Relief Fund</option>
          </select>
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default Donate;
