import React, { useState, useEffect} from 'react';
import './App.css';
import Auth from './auth/Auth';
import ChildHome from './children/ChildHome';
import Navigation from './navigation/NavigationBar';
import JumbotronHeader from './header/JumbotronHeader';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  const [sessionToken, setSessionToken] = useState('');
  const [sessionTokenLogged, setSessionTokenLogged] = useState(false);
  const [login, setLogin] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
      setSessionTokenLogged(true);
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    setSessionTokenLogged(true);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
    setSessionTokenLogged(false)
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <ChildHome token={sessionToken}/> : <Auth updateToken={updateToken} login={login} setLogin={setLogin}/>)
  }

  return (
    <div>
      <Router>
        <Navigation clickLogout={clearToken} login={login} setLogin={setLogin} sessionTokenLogged={sessionTokenLogged}/>
      </Router>
      <JumbotronHeader sessionToken={sessionToken}/>
      <Router>
      {protectedViews()}
      </Router>
    
    </div>
  )
}

export default App;
