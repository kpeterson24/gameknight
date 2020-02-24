import React, { Component } from 'react';
import { connect } from 'react-redux';
import BotNav from '../Nav/BotNav';
// import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {

  render() {
    return (
      <center>
      <div>
      <h1 id="welcome"> Prepare Yourself, { this.props.user.username }!</h1>
      
      <BotNav />
      </div>
      </center>
    )
  }

}
 


// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
