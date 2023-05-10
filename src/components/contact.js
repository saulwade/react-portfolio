import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form data
    let errors = {};
    if (!formData.name) {
      errors.name = 'Name is required.';
    }
    if (!formData.email) {
      errors.email = 'Email is required.';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email.';
    }
    if (!formData.message) {
      errors.message = 'Message is required.';
    }

    // Check if there are any errors
    if (Object.keys(errors).length) {
      setFormErrors(errors);
    } else {
      // Submit the form data and clear the form
      console.log(formData);
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {formErrors.name && <p className="error">{formErrors.name}</p>}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {formErrors.email && <p className="error">{formErrors.email}</p>}

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
        ></textarea>
        {formErrors.message && <p className="error">{formErrors.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
