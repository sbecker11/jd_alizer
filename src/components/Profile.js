import React, { useState } from 'react';
import * as Yup from 'yup';
import './Profile.css'; // Import your CSS file

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const schema = Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .matches(
          /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
          'Password must meet criteria'
        )
        .required('Password is required'),
    });

    schema
      .validate(profileData, { abortEarly: false })
      .then(() => {
        setErrors({});
      })
      .catch((validationErrors) => {
        const errorsObject = {};
        validationErrors.inner.forEach((error) => {
          errorsObject[error.path] = error.message;
        });
        setErrors(errorsObject);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    // You can add code here to send the profile data to the server or perform other actions.
  };

  const handleClear = () => {
    setProfileData({
      name: '',
      email: '',
      password: '',
    });
    setErrors({});
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="input-container">
          <div className="label-error-container">
            <label>Name</label>
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <div className="label-error-container">
            <label>Email</label>
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <input
            type="text"
            name="email"
            value={profileData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <div className="label-error-container">
            <label>Password</label>
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <input
            type="password"
            name="password"
            value={profileData.password}
            onChange={handleChange}
          />
        </div>

        <div className="button-container">
          <button type="button" onClick={handleClear}>Clear</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
