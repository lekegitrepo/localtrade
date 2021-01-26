import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleForm = e => {
    axios.post('http://localhost:3001/api/v1/sign_in', { session: { ...state } },
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
      <h2>Login Form</h2>
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
        <div className="form__group form-btn">
          <button type="submit"> Sign In </button>
        </div>
      </form>
    </section>
  );
};

/*
Login.defaultProps = {
  loggedIn: false,
};

Login.propTypes = {
  loggedIn: PropTypes.bool,
};
*/
export default Login;
