import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import Toolbar from '@material-ui/core/Toolbar';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import HomeIcon from '@material-ui/icons/Home';


const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 'flex',
    },
    grow: {
        flexGrow: 1
    },
};




   const TopNav = (props) => {
        const { classes } = props;
        const goHome = () => { props.history.push('/home') };
       
        
       return(
            
        
            <div className = {classes.root}>
                <AppBar position = "static">
                    <Toolbar>
                            {/* Show the link to the info page and the logout button if the user is logged in */}
                            {props.user.id && (
                            <IconButton color="inherit" className={classes.menuButton} aria-label="Logout"
                            // This button shows up in multiple locations and is styled differently
                            // because it's styled differently depending on where it is used, the className
                            // is passed to it from it's parents through React props
                            // className={props.className}
                            onClick={() => props.dispatch({ type: 'LOGOUT' })}
                          >
                            <KeyboardReturnIcon />
                          </IconButton>

                            )}
                        <Typography variant="h6" color="red" className={classes.grow}>
                            Add Event
                        </Typography>
                                
                                <IconButton  color="inherit" className={classes.menuButton} aria-label="Home" onClick={goHome}>
                                    <HomeIcon /> 
                                </IconButton>

                        <IconButton color="inherit" className={classes.menuButton} aria-label="Help">
                            <HelpIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
       )
   }


const mapStateToProps = state => ({
    user: state.user,
  });



export default withRouter(connect(mapStateToProps)(withStyles(styles)(TopNav)));