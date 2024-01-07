import React, { useState } from 'react';
import * as Yup from 'yup';

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
          /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
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

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={profileData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <label>Email</label>
        <input
          type="text"
          name="email"
          value={profileData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={profileData.password}
          onChange={handleChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
