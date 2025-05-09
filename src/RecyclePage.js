import React, { useState } from "react";

const RecyclePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    clothes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Confirmed! Your recycling request has been submitted.");
    setFormData({
      name: "",
      phone: "",
      pincode: "",
      clothes: "",
    });
  };

  return (
    <div className="info-section">
      <h2>♻ Recycle Your Clothes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="clothes"
          placeholder="Number of Clothes to Recycle"
          value={formData.clothes}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RecyclePage;
