import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Categories from './pages/Categories';
import Home from './pages/Home';
import Posts from './pages/Posts';
import { AuthProvider } from 'oidc-react';

const oidcConfig = {
  onSignIn: () => {
    // Redirect?
  },
  authority: 'https://localhost:5001',
  clientId: 'react',
  redirectUri: 'http://localhost:3000',
  responseType: "id_token token",
  scope:"openid profile api1"
};

function App() {
  return (
    <>
      <Router>
        <AuthProvider {...oidcConfig}>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/categories' component={Categories} />
            <Route path='/posts' component={Posts} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
