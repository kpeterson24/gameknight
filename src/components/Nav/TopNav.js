import React, {useState} from 'react';
import { connect } from 'react-redux';
import { withStyles} from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import Toolbar from '@material-ui/core/Toolbar';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import HomeIcon from '@material-ui/icons/Home';
import Popover from '@material-ui/core/Popover';


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
    container: {
        width: '100%'
        
    },
    pageTitle: {
        position: 'auto',
        flexGrow: 1
    }
};

const popStyles = theme => ({
    typography: {
        margin: theme.spacing.unit * 2,
    },
});



   const TopNav = (props) => {
        const { classes } = props;
        const goHome = () => { props.history.push('/home') };
        const [anchorEl, setAnchorEl] = useState(false)
        const open = Boolean(anchorEl);



        const handleClick = event => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        
    
       return(
            <div className = {classes.root}>
                <AppBar className = {classes.container}>
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
                        <Typography variant="h6" className={classes.pageTitle}>
                            Add Event
                        </Typography>
                                
                                <IconButton  color="inherit" className={classes.menuButton} aria-label="Home" onClick={goHome}>
                                    <HomeIcon /> 
                                </IconButton>

                        <IconButton 
                            color="inherit" 
                            className={classes.menuButton} 
                            aria-label="Help" 
                            aria-owns={open ? 'simple-popper :' : undefined}
                            aria-haspopup="true"
                            variant="contained"
                            onClick={handleClick}>
                            <HelpIcon />
                        </IconButton>
                        <Popover
                            open={anchorEl}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            >
                            <Typography className={classes.typography}>The content of the Popover.</Typography>
                        </Popover>
                    </Toolbar>
                </AppBar>
            </div>
       )
    }   
    
    // TopNav.propTypes = {
    //     classes: PropTypes.object.isRequired,
    //   };


const mapStateToProps = state => ({
    user: state.user,
  });



export default withRouter(connect(mapStateToProps)(withStyles(styles, popStyles)(TopNav)));