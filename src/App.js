import React, { useState, useEffect} from 'react';
import './App.css';
import Auth from './auth/Auth';
import ChildHome from './children/ChildHome';

function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <ChildHome token={sessionToken}/> : <Auth updateToken={updateToken} />)
  }

  return (
    <div>
     {protectedViews()}
    </div>
  )
}

export default App;
