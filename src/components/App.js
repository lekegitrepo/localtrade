import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <section>
      <h1>This is the Localtrade app</h1>
      <div>
        <div>
          <Link to="/registration">click here to Sign Up</Link>
        </div>
        <div>
          <Link to="/login">click here to Login</Link>
        </div>
      </div>
    </section>
  );
}

export default App;
