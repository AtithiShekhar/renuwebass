import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [screen, setScreen] = useState('register');
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <div>
      {screen === 'register' && <Register setScreen={setScreen} />}
      {screen === 'login' && <Login setScreen={setScreen} setToken={setToken} setUser={setUser} />}
      {screen === 'home' && <Home user={user} token={token} setScreen={setScreen} />}
    </div>
  );
}

export default App;