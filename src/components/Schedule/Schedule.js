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
import BotNav from '../Nav/BotNav';
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

    componentDidMount() {
        this.props.dispatch({type: 'GET_USERS'});
        this.props.dispatch({type: 'GET_SCHEDULE'});
        
    };
  

    render() {
        const { classes } = this.props;
        console.log(this.props);
        return (
            
            <div>
                {JSON.stringify(this.props)}
                
                
                {this.props.event.map( ( event, i ) => {
                    
                    return(
                
                <Card className = {classes.card} key={i}>
                    <CardHeader
                        avatar = { 
                            <Avatar alt = {event.username}  aria-label= "Host" className = {classes.avatar}> K </Avatar> 
                        }
                        title = {event.title}
                        subheader = {event.date}
                    />
                    <CardContent>
                        <Typography component = 'h1'>
                           {event.desc}
                        </Typography>
                        <Typography component = 'p'>
                            Location: {event.location}
                        </Typography>
                        <Typography component = 'p'>
                            Attending:
                            <AvatarGroup>
                                <Avatar alt = {event.username} src = {event.profile_image}></Avatar>
                                <Avatar alt = {event.username} src = {event.profile_image}></Avatar>
                                <Avatar alt = {event.username} src = {event.profile_image}></Avatar>
                                <Tooltip title = "Guests">
                                    <Avatar>=3</Avatar>
                                </Tooltip>
                            </AvatarGroup>
                        </Typography>
                        <Typography component = 'p'>
                            Games: {event.game_id}
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
                <BotNav />
            </div>
        )
    }
}

Schedule.propTypes = {
    classes: PropTypes.object.isRequired,
};

const putReduxStateOnProps = ( reduxStore ) => ({
    users: reduxStore.allUsers,
    games: reduxStore.games,
    event: reduxStore.events
})
  
export default connect(putReduxStateOnProps)(withStyles(styles)(Schedule));