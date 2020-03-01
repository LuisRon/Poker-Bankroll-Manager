import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Cash from './pages/cash/Cash';
import Tournaments from './pages/tournaments/Tournaments';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cash' component={Cash} />
        <Route exact path='/tournaments' component={Tournaments} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
