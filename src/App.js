import React from 'react';
import './App.css';
import Navbar from './components/NavbarAdmin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Maskapai from './pages/Maskapai';
import Pesanan from './pages/Pesanan';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/daftar-maskapai' component={Maskapai} />
          <Route path='/daftar-pesanan' component={Pesanan} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
