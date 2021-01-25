/* eslint-disable camelcase */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

const Registration = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleForm = e => {
    const { email, password, password_confirmation } = state;
    axios.post('localhost:3001/api/v1/sign_up', {
      email,
      password,
      password_confirmation,
    },
    { withCredentials: true }).then(resp => {
      console.log('This is response', resp);
    }).catch(err => {
      console.log('This is response error', err);
    });
    e.preventDefault();
  };

  const handleChange = e => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section>
      <h2>Registration Form</h2>
      <form onSubmit={handleForm}>
        <div className="form__group">
          <label htmlFor="fname" className="form__label">
            email
            <input
              type="email"
              name="email"
              className="form__input"
              id="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="password" className="form__label">
            Password
            <input
              type="password"
              name="password"
              className="form__input"
              id="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="password_confirmation" className="form__label">
            Password Confirmation
            <input
              type="password"
              name="password_confirmation"
              className="form__input"
              id="password_confirmation"
              placeholder="Password Confirmation"
              value={state.password_confirmation}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form__group form-btn">
          <button type="submit"> Register </button>
        </div>
      </form>
    </section>
  );
};

/* Registration.defaultProps = {
  loggedIn: false,
};

Registration.propTypes = {
  loggedIn: PropTypes.bool,
}; */

export default Registration;
