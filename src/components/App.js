import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-dom';
import Login from './auth/Login';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>
        You clicked
        {count}
        times
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <div>
        <Login loggedIn={false} />
      </div>
    </div>
  );
}

export default App;
