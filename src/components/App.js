import React, { Component } from 'react';
import Login from './Login';
import Error from './Error';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { Switch, Route, withRouter } from 'react-router-dom';
// import LeaderBoard from './LeaderBoard';
import Home from './Home';
import Dashboard from './Dashboard';
import Logout from './Logout';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/logout" component={Logout}/>
          <Route component={Error}/> {/* https://tylermcginnis.com/react-router-handling-404-pages/ */}
        </Switch>
      </div>
    )
  }
}

export default withRouter(connect()(App));
