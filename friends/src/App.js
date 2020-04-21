import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

class App extends React.Component {

constructor() {
  super();
  this.state = { credentials: {} }
}

render(){
  return (
    <div className="App">
      <Router>
        <div className="Nav">
          <Route path="/login" component={login} />
          <PrivateRoute exact path="/protected" component={FriendsList} />
        </div>
      </Router>
    </div>
  );
}
}


export default App;
