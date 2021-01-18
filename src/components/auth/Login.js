import React from 'react';
import PropTypes from 'prop-types';

const Login = ({ loggedIn }) => {
  const status = loggedIn;
  const handleForm = e => {
    const userData = '';
    const state = '';
    console.log('This is initial data', userData, state);
    e.preventDefault();
  };

  return (
    <section>
      <h2>
        Login Form:
        {status}
      </h2>
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
        <button type="submit"> Login </button>
      </form>
    </section>
  );
};

Login.defaultProps = {
  loggedIn: false,
};

Login.propTypes = {
  loggedIn: PropTypes.bool,
};

export default Login;
