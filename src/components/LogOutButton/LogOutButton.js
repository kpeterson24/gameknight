import React from 'react';
import { connect } from 'react-redux';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';






const LogOutButton = props => {
  const { classes } = props;
  return(
  <IconButton color="inherit" className={classes.menuButton} aria-label="Logout"
    // This button shows up in multiple locations and is styled differently
    // because it's styled differently depending on where it is used, the className
    // is passed to it from it's parents through React props
    // className={props.className}
    onClick={() => props.dispatch({ type: 'LOGOUT' })}
  >
    <KeyboardReturnIcon />
  </IconButton>
  )
  };

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(withStyles(LogOutButton));
