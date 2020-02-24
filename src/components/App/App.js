import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';
import TopNav from '../Nav/TopNav';
import BotNav from'../Nav/BotNav';
// import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import UserPage from '../UserPage/UserPage';
import Schedule from '../Schedule/Schedule';
import Games from '../Games/Games';
import AddGame from '../AddGame/AddGame';
import AddEvent from '../AddEvent/AddEvent';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <TopNav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/schedule will show the about page.
            This is a route anyone can see, no login necessary */}
            <ProtectedRoute
              exact path="/schedule"
              component={Schedule}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />

            <ProtectedRoute
              exact
              path="/game"
              component={Games}
            />

            <ProtectedRoute
              exact
              path="/addgame"
              component={AddGame}
            />

            <ProtectedRoute
            exactpath="/addevent"
            component={AddEvent}
            />

            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
            <BotNav />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
  )}
}

export default connect()(App);
