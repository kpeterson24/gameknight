import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/core/Avatar';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';




const styles = theme => ({
    card: {
        maxWidth: 345,
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transfom', {
            duration: theme.transitions.duration.shortest
        }),
    },
    expandOpen: {
        transform: 'rotate180deg',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class Schedule extends Component {

    state = { 
        expanded: false,
        checkedA: true, 
        };

     handleCheckChange = name => event => {
        this.setState( { [name] : event.target.checked });     
     }  ; 

    handleExpandClick = () => {
        this.setState( state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                {this.props.user.map( ( user, i ) => {
                    return(
                
                <Card className = {classes.card}>
                    <CardHeader
                        avatar = { 
                            <Avatar alt = {user.username} src = {user.profile_image} aria-label= "Host" className = {classes.avatar}> K </Avatar> 
                        }
                        title = {this.props.event.title}
                        subheader = {this.props.event.date}
                    />
                    <CardContent>
                        <Typography component = 'p'>
                            {this.props.event.desc}
                        </Typography>
                        <Typography component = 'p'>
                            Location: {this.props.event.location}
                        </Typography>
                        <Typography component = 'p'>
                            Attending:
                            <AvatarGroup>
                                <Avatar alt = {user.username} src = {user.profile_image}></Avatar>
                                <Avatar alt = {user.username} src = {user.profile_image}></Avatar>
                                <Avatar alt = {user.username} src = {user.profile_image}></Avatar>
                                <Tooltip title = "Foo • Bar • Baz">
                                    <Avatar>+3</Avatar>
                                </Tooltip>
                            </AvatarGroup>
                        </Typography>
                        <Typography component = 'p'>
                            Games: {this.props.total_games.game_total}
                        </Typography>
                        <div>
                            <Typography component = 'p'>Are you Coming?</Typography>
                            <Checkbox checked = {this.state.checkedA} onChange = {this.handleCheckChange('checkedA')} value = "checkedA" />
                        </div>
                    </CardContent>
                    <CardActions className = {classes.actions} disableActionSpacing>
                        <Typography component = 'h4'>See Full Event Details</Typography>
                        <IconButton
                        className = {classnames( classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick = {this.handleExpandClick}
                        aria-expanded = {this.state.expanded}
                        aria-label = "Show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>    
                    </CardActions>
                    <Collapse in = {this.state.expanded} timeout = "auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Guest List:</Typography>
                            <Typography component = 'ul'>{this.props.event.guestlist}</Typography>

                        </CardContent>
                    </Collapse>

                </Card>
                    )
                })}
            </div>
        )
    }
}

Schedule.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = data => ({
    event: data.event,
  });
  
export default connect(mapStateToProps)(withStyles(styles)(Schedule));