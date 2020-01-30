import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CasinoIcon from '@material-ui/icons/Casino';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EventIcon from '@material-ui/icons/Event';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

const styles = theme => ({
    root: {
        width: 'flex',
       
        padding: '10px'
    },
    navBody: {
        justify: 'center',
        display: 'center',
        margin: '0px',
        padding: '0px'
      }
});

class BotNav extends Component {

    state = {
        value: 0,
        
    };

    handleChange = (event, propName) => {
        this.setState({ propName });
    };

    render() {

        const { classes } = this.props;
        const { value } = this.state;

        return(
            <div className = {classes.navBody}>
            <BottomNavigation
                
                value={ value }
                onChange={ this.handleChange }
                showLabels
                className={ classes.root }
            >
                <BottomNavigationAction component={Link} to="/addgame" label="Add Game" icon={<PlaylistAddIcon color="disabled"/>}  />
                <BottomNavigationAction component={Link} to="/game" label="My Games" icon={<CasinoIcon color="disabled"/>} />
                <BottomNavigationAction component={Link} to="/home" label="Profile" icon={<AccountCircleIcon color="disabled"/>} />
                <BottomNavigationAction component={Link} to="/schedule" label="My Events" icon={<EventIcon color="disabled"/>} />
                <BottomNavigationAction component={Link} to="/addevent" label="Add Event" icon={<LibraryAddIcon color="disabled"/>} />  
            </BottomNavigation>
            </div>
        )
    }
}
export default connect()(withStyles(styles)(BotNav));