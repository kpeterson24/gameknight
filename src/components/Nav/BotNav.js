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

const styles = {
    root: {
        width: 'absolute',
    },
};

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
            <BottomNavigation
                value={ value }
                onChange={ this.handleChange }
                showLabels
                className={ classes.root }
            >
                <BottomNavigationAction component={Link} to="/addgame" label="Add Game" icon={<PlaylistAddIcon/>}  />
                <BottomNavigationAction component={Link} to="/game" label="My Games" icon={<CasinoIcon/>} />
                <BottomNavigationAction component={Link} to="/api/user" label="Profile" icon={<AccountCircleIcon/>} />
                <BottomNavigationAction component={Link} to="schedule" label="My Events" icon={<EventIcon/>} />
                <BottomNavigationAction component={Link} to="addevent" label="Add Event" icon={<LibraryAddIcon/>} />  
            </BottomNavigation>
        )
    }
}
export default connect()(withStyles(styles)(BotNav));