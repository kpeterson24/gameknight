import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

/////////// THIS WILL NOT BE IMPORTED ON THE LOGIN PAGE ///////////

const Nav = (props) => (
  <div className="nav">
    {/* Show the link to the info page and the logout button if the user is logged in */}
    {props.user.id && (
        <>
          <LogOutButton className="nav-link"/>
        </>
      )}
    <Link to="/home">
      {/* KOREY - BE SURE TO CENTER THE HOME BUTTON */}
      <h2 className="nav-title">GameKnight</h2>
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>
      
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
