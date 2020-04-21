import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./actions/AddFriend";
import UpdateFriend from "./actions/UpdateFriend";
import DeleteFriend from "./actions/DeleteFriend";
import PrivateRoute from "./components/PrivateRoute";


class App extends React.Component {

constructor() {
  super();
  this.state = { credentials: {} }
}

render(){
  return (
    <div className="App">
      <Router>
        <Link to='/login'>Login</Link>
        <Link to='/friends-list'>Friends List</Link>
        <Link to='/update-friend'>Update Friend</Link>
        <Link to='/add-friend'>Add Friend</Link>
        <Link to='/delete-friend'>Delete Friend</Link>

        <Switch>
          <PrivateRoute exact path='/friends-list' component={FriendsList} />
          <PrivateRoute exact path='/add-friend' component={AddFriend} />
          <PrivateRoute exact path='/delete-friend' component={DeleteFriend} />
          <PrivateRoute exact path='/update-friend' component={UpdateFriend} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;