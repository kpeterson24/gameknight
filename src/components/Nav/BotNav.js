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
        width:'flex',
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
                <Link to="/addgame">
                    <BottomNavigationAction label="Add Game" icon={<PlaylistAddIcon/>} />
                </Link>
                <Link to="/game">
                    <BottomNavigationAction label="My Games" icon={<CasinoIcon/>} />
                </Link>
                <Link to="/api/user">
                    <BottomNavigationAction label="Profile" icon={<AccountCircleIcon/>} />
                </Link>   
                <Link to="schedule">
                    <BottomNavigationAction label="My Events" icon={<EventIcon/>} />
                </Link>
                <Link to="addevent">
                    <BottomNavigationAction label="Add Event" icon={<LibraryAddIcon/>} />
                </Link>
            </BottomNavigation>
        )
    }
}
export default connect()(withStyles(styles)(BotNav));