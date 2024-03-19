import React, { useState } from "react";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    degree: "",
    gender: "", 
    feedback: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    try {
      const response = await fetch('http://localhost:8000/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
  
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        degree: "",
        gender: "",
        feedback: "",
      });
      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };
  

  const handleCancel = () => {
    setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        degree: "",
        gender: "",
        feedback: "",
      });
  }

  return (
    <div className="py-5">
      <h1 className="h2 text-center font-weight-bold">Admission Form</h1>
      <form className="py-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="FirstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="LastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email ID:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="E-mail"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone No:
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            pattern="[0-9]{10}"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            maxLength={10}
            required
          />
        </div>
        <div className="mb-3">
          <p>Degree:</p>
          <div className="d-flex flex-wrap align-items-center gap-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="degree"
                id="BSC"
                value="BSC"
                checked={formData.degree === "BSC"}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="BSC">
                B.Sc
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="degree"
                id="BE"
                value="BE"
                checked={formData.degree === "BE"}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="BE">
                B.E
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="degree"
                id="MBA"
                value="MBA"
                checked={formData.degree === "MBA"}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="MBA">
                M.B.A
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="degree"
                id="MCA"
                value="MCA"
                checked={formData.degree === "MCA"}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="MCA">
                M.C.A
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <p>Gender:</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Male"
              id="male"
              name="gender"
              checked={formData.gender === "Male"}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Female"
              id="female"
              name="gender"
              checked={formData.gender === "Female"}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="feedback" className="form-label">
            Feedback:
          </label>
          <textarea
            className="form-control"
            id="feedback"
            rows="3"
            name="feedback"
            value={formData.feedback}
            onChange={handleInputChange}
            maxLength={100}
          ></textarea>
        </div>
        <div className="text-center">
        <button
          className="btn btn-success mx-3"
          type="submit"
        >
          Submit
        </button>
        <button className="btn btn-danger" type="button" onClick={handleCancel}>Cancel</button>
      </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
